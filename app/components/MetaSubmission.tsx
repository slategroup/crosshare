import { formatDistanceToNow } from 'date-fns';
import type { User } from 'firebase/auth';
import { Dispatch, FormEvent, useContext, useState } from 'react';
import { isMetaSolution } from '../lib/utils.js';
import {
  ContestRevealAction,
  ContestSubmitAction,
} from '../reducers/puzzleReducer.js';
import { AuthContext } from './AuthContext.js';
import { Button, ButtonAsLink } from './Buttons.js';
import { MAX_META_SUBMISSION_LENGTH } from './ClueMode.js';
import { DisplayNameForm, useDisplayName } from './DisplayNameForm.js';
import { Emoji } from './Emoji.js';
import { GoogleLinkButton, GoogleSignInButton } from './GoogleButtons.js';
import { LengthLimitedInput, LengthView } from './Inputs.js';
import { useSnackbar } from './Snackbar.js';

const MetaSubmissionForm = (props: {
  user: User;
  revealDisabledUntil: Date | null;
  hasPrize: boolean;
  dispatch: Dispatch<ContestSubmitAction | ContestRevealAction>;
  solutions: string[];
}) => {
  const [submission, setSubmission] = useState('');
  const displayName = useDisplayName();
  const [editingDisplayName, setEditingDisplayName] = useState(false);
  const [enteringForPrize, setEnteringForPrize] = useState(false);
  const { addToast } = useSnackbar();
  const disabled = props.revealDisabledUntil
    ? new Date() < props.revealDisabledUntil
    : false;

  function submitMeta(event: FormEvent) {
    event.preventDefault();
    props.dispatch({
      type: 'CONTESTSUBMIT',
      submission: submission,
      displayName: displayName || 'Anonymous Crossharer',
      ...(props.hasPrize &&
        enteringForPrize &&
        props.user.email && { email: props.user.email }),
    });
    if (isMetaSolution(submission, props.solutions)) {
      addToast('🚀 Solved a meta puzzle!');
    }
    setSubmission('');
  }

  return (
    <>
      <form onSubmit={submitMeta}>
        <p>
          {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
          <label>
            Your meta submission:
            <br />
            <LengthLimitedInput
              placeholder="Submission (case insensitive)"
              type="text"
              value={submission}
              maxLength={MAX_META_SUBMISSION_LENGTH}
              updateValue={setSubmission}
            />
            <LengthView
              value={submission}
              maxLength={MAX_META_SUBMISSION_LENGTH}
              hideUntilWithin={30}
            />
          </label>
        </p>
        {props.hasPrize && props.user.email ? (
          <p>
            This puzzle has a prize. If you choose to enter, your email will be
            made available to the constructor so they can select a winner.
            <br />
            <label>
              <input
                className="marginRight1em"
                type="checkbox"
                checked={enteringForPrize}
                onChange={(e) => {
                  setEnteringForPrize(e.target.checked);
                }}
              />{' '}
              Enter my email address ({props.user.email}) for the prize
            </label>
          </p>
        ) : (
          ''
        )}
        {editingDisplayName || !displayName ? (
          ''
        ) : (
          <>
            <p>
              <Button
                type="submit"
                className="marginRight0-5em"
                disabled={!/\S/.test(submission)}
                text="Submit"
              />
              submitting as {displayName} (
              <ButtonAsLink
                onClick={() => {
                  setEditingDisplayName(true);
                }}
                text="change name"
              />
              )
            </p>
          </>
        )}
      </form>
      {editingDisplayName || !displayName ? (
        <>
          <DisplayNameForm
            onCancel={() => {
              setEditingDisplayName(false);
            }}
          />
        </>
      ) : (
        ''
      )}
      <p>
        <Button
          className="marginRight0-5em"
          onClick={() => {
            props.dispatch({
              type: 'CONTESTREVEAL',
              displayName: displayName || 'Anonymous Crossharer',
            });
          }}
          disabled={disabled}
          text="Give Up / Reveal"
        />
        {disabled && props.revealDisabledUntil ? (
          <span>
            Reveal will be available{' '}
            {formatDistanceToNow(props.revealDisabledUntil, {
              addSuffix: true,
            })}
          </span>
        ) : (
          ''
        )}
      </p>
    </>
  );
};

export const MetaSubmission = (props: {
  contestSubmission?: string;
  contestRevealed?: boolean;
  revealDisabledUntil: Date | null;
  hasPrize: boolean;
  dispatch: Dispatch<ContestSubmitAction | ContestRevealAction>;
  solutions: string[];
  isAuthor: boolean;
}) => {
  const authContext = useContext(AuthContext);
  if (!authContext.user || authContext.user.isAnonymous) {
    return (
      <div className="marginTop1em">
        <h4 className="borderBottom1pxSolidBlack">Contest</h4>
        <p>
          This is a meta puzzle! Sign in with google to submit your solution,
          view the solution, view the leaderboard, and read or submit comments:
        </p>
        <div className="textAlignCenter">
          {authContext.user ? (
            <GoogleLinkButton user={authContext.user} />
          ) : (
            <GoogleSignInButton />
          )}
        </div>
      </div>
    );
  }

  const isComplete =
    props.contestRevealed ||
    isMetaSolution(props.contestSubmission, props.solutions) ||
    props.isAuthor;

  return (
    <div className="marginTop1em">
      <h4 className="borderBottom1pxSolidBlack">Contest</h4>

      {props.contestSubmission ? (
        isMetaSolution(props.contestSubmission, props.solutions) ? (
          <p>
            Your submission (<strong>{props.contestSubmission}</strong>) is
            correct!
          </p>
        ) : (
          <p>
            Your submission (<strong>{props.contestSubmission}</strong>) was
            incorrect <Emoji symbol="😭" />.
          </p>
        )
      ) : (
        ''
      )}

      {props.contestRevealed || props.isAuthor ? (
        props.solutions.length === 1 ? (
          <p>
            The solution is: <strong>{props.solutions[0]}</strong>
          </p>
        ) : (
          <p>
            The solutions are:{' '}
            {props.solutions.map((s, i) => [
              i > 0 && ', ',
              <strong key={i}>{s}</strong>,
            ])}
          </p>
        )
      ) : (
        ''
      )}

      {!isComplete ? (
        <>
          <p>
            This is a meta puzzle! Submit your solution to see if you got it,
            view the leaderboard, and read or submit comments:
          </p>
          <MetaSubmissionForm user={authContext.user} {...props} />
        </>
      ) : (
        ''
      )}
    </div>
  );
};
