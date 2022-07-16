import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';

export default function DownloadURL({ children, os }) {
  const [downloadURL, setDownloadURL] = useState('https://docs.fairshareapp.io');

  const getLatestVersion = async () => {
    const res = await fetch('https://api.github.com/repos/fairdataihub/FAIRshare/releases');
    const data = await res.json();
    const release = data[0];

    release.assets.forEach((asset) => {
      const fileName = asset.name;
      const fileExt = fileName.split('.').pop();

      if (fileExt === 'dmg' && os === 'macos') {
        setDownloadURL(asset.browser_download_url);
      }
      if (fileExt === 'exe' && os === 'windows') {
        setDownloadURL(asset.browser_download_url);
      }
      if (fileExt === 'AppImage' && os === 'linux') {
        setDownloadURL(asset.browser_download_url);
      }
    });
  };

  useEffect(() => {
    getLatestVersion();
  }, [os]);

  return (
    <a href={downloadURL} rel="noopener">
      {children}
    </a>
  );
}

DownloadURL.propTypes = {
  os: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
