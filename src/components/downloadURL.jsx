import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function DownloadURL({ children, os }) {
  const [downloadURL, setDownloadURL] = useState('https://docs.fairshareapp.io');

  const getLatestVersion = async () => {
    try {
      const res = await fetch('https://api.github.com/repos/fairdataihub/FAIRshare/releases');
      const data = await res.json();

      const release = data.find((item) => {
        const fileExt = item.name.split('.').pop();
        return (
          (fileExt === 'dmg' && os === 'macos') ||
          (fileExt === 'exe' && os === 'windows') ||
          (fileExt === 'AppImage' && os === 'linux')
        );
      });

      if (release) {
        const asset = release.assets.find((item) => {
          const fileExt = item.name.split('.').pop();
          return fileExt === os;
        });

        if (asset) {
          setDownloadURL(asset.browser_download_url);
        }
      }
    } catch (error) {
      console.error('Error fetching latest version:', error);
      // Tratar o erro de acordo com as necessidades do aplicativo
    }
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
  os: PropTypes.oneOf(['macos', 'windows', 'linux']).isRequired,
  children: PropTypes.node.isRequired,
};
