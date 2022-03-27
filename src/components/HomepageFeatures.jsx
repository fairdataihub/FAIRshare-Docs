/* eslint-disable react/no-array-index-key */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import clsx from 'clsx';
import Lottie from 'react-lottie';
import styles from './HomepageFeatures.module.css';

import scienceAnimationData from './lotties/science.json';
import focusAnimationData from './lotties/focus.json';
import programmingAnimationData from './lotties/programming.json';

const FeatureList = [
  {
    title: 'Easy to Use',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: scienceAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    height: 300,
    width: 300,
    description: (
      <>
        FAIRshare is designed to be easy to install and use so that anyone can make their data FAIR
        even without prior knowledge of FAIR guidelines in their field.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: focusAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    height: 300,
    width: 300,
    description: (
      <>
        FAIRshare includes automation to streamline the process of making your data FAIR such that
        it requires minimal time and effort from you.
      </>
    ),
  },
  {
    title: 'Powered by open source',
    animationOptions: {
      loop: true,
      autoplay: true,
      animationData: programmingAnimationData,
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice',
      },
    },
    height: 400,
    width: 400,
    description: (
      <>
        FAIRshare is built on top of the open source software that powers the internet. We are proud
        to be a part of the open source community. Your data is yours.
      </>
    ),
  },
];

// eslint-disable-next-line react/prop-types
function Feature({ animationOptions, title, height, width, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center py-4">
        <Lottie options={animationOptions} height={height} width={width} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row flex items-end">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
