/* eslint-disable import/no-unresolved */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import { useVersions, useActiveDocContext } from '@docusaurus/plugin-content-docs/client';
// eslint-disable-next-line import/no-extraneous-dependencies
import { useDocsPreferredVersion } from '@docusaurus/theme-common';
import { useDocsVersionCandidates } from '@docusaurus/theme-common/internal';
import { translate } from '@docusaurus/Translate';
import DefaultNavbarItem from '@theme/NavbarItem/DefaultNavbarItem';
import DropdownNavbarItem from '@theme/NavbarItem/DropdownNavbarItem';

const getVersionMainDoc = (version) => version.docs.find((doc) => doc.id === version.mainDocId);

export default function DocsVersionDropdownNavbarItem({
  mobile,
  docsPluginId,
  dropdownActiveClassDisabled,
  dropdownItemsBefore,
  dropdownItemsAfter,
  ...props
}) {
  const activeDocContext = useActiveDocContext(docsPluginId);
  const versions = useVersions(docsPluginId);
  const { savePreferredVersionName } = useDocsPreferredVersion(docsPluginId);

  const versionLinks = versions.map((version) => {
    const versionDoc =
      activeDocContext.alternateDocVersions[version.name] ?? getVersionMainDoc(version);
    const label = `${version.label === 'Upcoming 🚧' ? '' : 'FAIRshare v.'}${version.label}`;
    return {
      label,
      to: versionDoc.path,
      isActive: () => version === activeDocContext.activeVersion,
      onClick: () => savePreferredVersionName(version.name),
    };
  });

  const items = [...dropdownItemsBefore, ...versionLinks, ...dropdownItemsAfter];
  const dropdownVersion = useDocsVersionCandidates(docsPluginId)[0];

  const dropdownLabel =
    mobile && items.length > 1
      ? translate({
          id: 'theme.navbar.mobileVersionsDropdown.label',
          message: 'Versions',
          description: 'The label for the navbar versions dropdown on mobile view',
        })
      : getDropdownLabel(dropdownVersion);

  const dropdownTo = mobile && items.length > 1 ? undefined : getVersionMainDoc(dropdownVersion).path;

  if (items.length <= 1) {
    return (
      <DefaultNavbarItem
        {...props}
        mobile={mobile}
        label={dropdownLabel}
        to={dropdownTo}
        isActive={dropdownActiveClassDisabled ? () => false : undefined}
      />
    );
  }

  return (
    <DropdownNavbarItem
      {...props}
      mobile={mobile}
      label={dropdownLabel}
      to={dropdownTo}
      items={items}
      isActive={dropdownActiveClassDisabled ? () => false : undefined}
    />
  );
}

function getDropdownLabel(dropdownVersion) {
  const versionLabel = dropdownVersion.label === 'Upcoming 🚧' ? '' : 'FAIRshare v.';
  return `${versionLabel}${dropdownVersion.label}`;
}
