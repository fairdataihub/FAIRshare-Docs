import React, { useState } from 'react';
import Lottie from 'react-lottie';
import LikeAnimationData from './lotties/like.json';
import DislikeAnimationData from './lotties/dislike.json';
import SuccessAnimationData from './lotties/success.json';

function AskFeedback({ setShowSuccess, setReaction, setShowTextFeedback }) {
  const [startLikeAnimation, setStartLikeAnimation] = useState(false);
  const [startDislikeAnimation, setStartDislikeAnimation] = useState(false);

  const likeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: LikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const dislikeAnimationOptions = {
    loop: true,
    autoplay: false,
    animationData: DislikeAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  const sendReactionFeedback = async (action) => {
    console.log(`Send feedback - Title: ${document.title} | Reaction: ${action}`, action);
    setReaction(action);
    const windowTitle = document.title;
    const analyticsTitle = windowTitle.split(' | ')[0];
    const feedbackText = '';
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ type: 'Reaction', category: analyticsTitle, action, feedbackText }),
    };

    try {
      const response = await fetch('/api/feedback', requestOptions);
      if (response.status === 200) {
        const res = await response.json();
        if (res.success) {
          console.log(`Feedback sent successfully. Response : ${res.message}`);
        } else {
          console.log('There was an error with sending the feedback');
        }
      } else {
        console.log('There was an error with sending the feedback');
      }
    } catch (error) {
      console.log('There was an error with sending the feedback');
    }

    setShowTextFeedback(true);
    setShowSuccess(true);
  };

  return (
    <div className="mt-4 flex w-full flex-col items-center justify-center sm:flex-row">
      <h3 className="mb-5 w-max pr-5 sm:mb-0"> Was this page helpful? </h3>
      <div className="flex items-center justify-center space-x-4">
        <button
          className="feedback-button feedback-button-yes"
          onClick={() => sendReactionFeedback('Like')}
          onMouseEnter={() => setStartLikeAnimation(true)}
          onMouseLeave={() => setStartLikeAnimation(false)}
          type="button"
        >
          <Lottie
            options={likeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startLikeAnimation}
          />
          <span className="px-2">Yes</span>
        </button>
        <button
          className="feedback-button feedback-button-no"
          onClick={() => sendReactionFeedback('Dislike')}
          onMouseEnter={() => setStartDislikeAnimation(true)}
          onMouseLeave={() => setStartDislikeAnimation(false)}
          type="button"
        >
          <Lottie
            options={dislikeAnimationOptions}
            height={25}
            width={25}
            isClickToPauseDisabled
            isStopped={!startDislikeAnimation}
          />
          <span className="px-2">No</span>
        </button>
      </div>
    </div>
  );
}

function ShowSuccessMessage({ hideSubText }) {
  const animationOptions = {
    loop: 1,
    autoplay: true,
    animationData: SuccessAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div className="flex flex-row items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <h3 className="mb-0 w-max"> Thank you for your feedback! </h3>
        {!hideSubText && <h4 className="mb-3 pt-1">Would you like to leave any additional comments?</h4>}
      </div>
      {hideSubText && (
        <Lottie
          options={animationOptions}
          height={70}
          width={70}
          isClickToPauseDisabled
          style={{ margin: '0' }}
        />
      )}
    </div>
  );
}

function PageFeedback() {
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTextFeedback, setShowTextFeedback] = useState(false);
  const [reaction, setReaction] = useState('');
  const [hideSubText, setHideSubText] = useState(false);
  const [feedbackText, setFeedbackText] = useState('');

  const handleFeedbackTextChange = (event) => {
    setFeedbackText(event.target.value);
  };

  const sendTextFeedback = async () => {
    console.log(`Send feedback - Title: ${document.title} | Reaction: ${reaction}`, feedbackText);
    const windowTitle = document.title;
    const analyticsTitle = windowTitle.split(' | ')[0];
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        type: 'Comment',
        category: analyticsTitle,
        action: reaction,
        feedbackText,
      }),
    };

    try {
      const response = await fetch('/api/feedback', requestOptions);
      if (response.status === 200) {
        const res = await response.json();
        if (res.success) {
          console.log(`Feedback enviado com sucesso. Mensagem: ${res.message}`);
        } else {
          console.log('Ocorreu um erro ao enviar o feedback');
        }
      } else {
        console.log('Ocorreu um erro ao enviar o feedback');
      }
    } catch (error) {
      console.log('Ocorreu um erro ao enviar o feedback:', error);
    }

    setHideSubText(true);
    setShowTextFeedback(false);
  };

  return (
    <div className="mt-4 w-full ">
      <hr className="feedback-divider" />
      {showSuccess ? (
        <ShowSuccessMessage hideSubText={hideSubText} />
      ) : (
        <AskFeedback
          setShowSuccess={setShowSuccess}
          setReaction={setReaction}
          setShowTextFeedback={setShowTextFeedback}
        />
      )}
      {showTextFeedback && (
        <div className="flex justify-center space-x-2 pt-1">
          <textarea
            className="w-[350px] rounded-md px-3 py-2 font-inter"
            placeholder="Any additional comments?"
            onChange={handleFeedbackTextChange}
            value={feedbackText}
          />
          <button type="button" className="feedback-button feedback-button-yes !w-[180px]" onClick={sendTextFeedback}>
            Send feedback
          </button>
        </div>
      )}
    </div>
  );
}

export default PageFeedback;
