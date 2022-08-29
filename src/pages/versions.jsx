/* eslint-disable import/no-unresolved */
import React from 'react';
import Link from '@docusaurus/Link';
import { useVersions, useLatestVersion } from '@docusaurus/plugin-content-docs/client';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import { Icon } from '@iconify/react';
import AllVersionsJSON from '@site/docs.compatibility.json';
import packageJSON from '@site/package.json';
import Head from '@docusaurus/Head';

const docsPluginId = undefined; // Default docs plugin instance

const reversedArray = JSON.parse(JSON.stringify(AllVersionsJSON));

reversedArray.reverse().shift();

export default function Version() {
  const versions = useVersions(docsPluginId);
  const latestVersion = useLatestVersion(docsPluginId);
  const currentVersion = versions.find((version) => version.name === 'current');

  return (
    <Layout title="Versions" description="Versions page listing all documented site versions">
      <Head>
        <meta
          property="og:image"
          // eslint-disable-next-line max-len
          content="https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Documentation%20versions&description=Match%20every%20docs%20version%20to%20an%20app%20version."
        />
        <meta
          property="twitter:image"
          // eslint-disable-next-line max-len
          content="https://og.fairdataihub.org/api/ogimage?app=soda-for-sparc&title=Documentation%20versions&description=Match%20every%20docs%20version%20to%20an%20app%20version."
        />
      </Head>

      <main className="margin-vert--lg container">
        <Heading as="h1">
          <span id="versionsPage.title">FAIRshare documentation versions</span>
        </Heading>

        <p>
          To better follow the FAIR standards and be more transparent in all aspects of the
          versioning and archival process we map every version of our documentation with the
          appropriate version of FAIRshare. Since our documentation is versioned and released
          automatically using{' '}
          <Link to="https://github.com/semantic-release/semantic-release">Semantic releases</Link>,
          this page should list every matched version.
        </p>

        <div className="margin-bottom--lg">
          <Heading as="h3" id="next">
            <span id="versionsPage.current.title">Current version (Stable)</span>
          </Heading>

          <p>
            <span id="versionsPage.current.description">
              Here you can find the documentation for latest stable release of FAIRshare.
            </span>
          </p>

          <table>
            <thead>
              <tr>
                <th>Documentation version</th>

                <th>FAIRshare app version</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <th className="flex items-center justify-center space-x-2">
                  <span>{packageJSON.version}</span>

                  <Link
                    to={`https://github.com/fairdataihub/SODA-for-SPARC-Docs/releases/tag/v${
                      AllVersionsJSON.at(-1).docsVersion
                    }`}
                    className="flex items-center text-slate-700"
                  >
                    <Icon icon="akar-icons:github-fill" />
                  </Link>

                  <Link
                    to={`${latestVersion.path}/intro`}
                    className="flex items-center text-slate-700"
                  >
                    <Icon icon="icon-park-outline:doc-detail" />
                  </Link>
                </th>

                <td>
                  <div className="flex items-center justify-center space-x-2">
                    <span>{latestVersion.label}</span>

                    <Link
                      to={`https://github.com/fairdataihub/SODA-for-SPARC/releases/tag/v${
                        AllVersionsJSON.at(-1).appVersion
                      }`}
                      className="flex items-center text-slate-700"
                    >
                      <Icon icon="akar-icons:github-fill" />
                    </Link>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        {currentVersion !== latestVersion && (
          <div className="margin-bottom--lg">
            <Heading as="h3" id="latest">
              <span id="versionsPage.next.title">Upcoming version (Unreleased)</span>
            </Heading>

            <p>
              <span id="versionsPage.next.description">
                Here you can find the documentation for work-in-process and unreleased versions of
                FAIRshare.
              </span>
            </p>

            <table>
              <tbody>
                <tr>
                  <th>{currentVersion.label}</th>

                  <td>
                    <Link to={`${currentVersion.path}/intro`}>Documentation</Link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        <div className="margin-bottom--lg">
          <Heading as="h3" id="archive">
            <span id="versionsPage.archived.title">Past versions (Not maintained anymore)</span>
          </Heading>

          <p>
            <span id="versionsPage.archived.description">
              Here you can find documentation for previous versions of FAIRshare. Some of these
              versions may no longer be selectable or exist. If you want a particular version of the
              documentation platform, please refer to the appropriate version on our{' '}
              <Link to="https://doi.org/10.5281/zenodo.6959087">Zenodo archive</Link>.
            </span>
          </p>

          <table>
            <thead>
              <tr>
                <th>Documentation version</th>

                <th>FAIRshare app version</th>
              </tr>
            </thead>

            <tbody>
              {reversedArray.map((version) => (
                <tr key={version.docsVersion}>
                  <td className="flex items-center justify-center space-x-2 font-bold">
                    <span>{version.docsVersion}</span>

                    <Link
                      // eslint-disable-next-line max-len
                      to={`https://github.com/fairdataihub/SODA-for-SPARC-Docs/releases/tag/v${version.docsVersion}`}
                      className="flex items-center text-slate-700"
                    >
                      <Icon icon="akar-icons:github-fill" />
                    </Link>
                  </td>

                  <td>
                    <div className="flex items-center justify-center space-x-2">
                      <span>{version.appVersion}</span>

                      <Link
                        // eslint-disable-next-line max-len
                        to={`https://github.com/fairdataihub/SODA-for-SPARC/releases/tag/v${version.appVersion}`}
                        className="flex items-center text-slate-700"
                      >
                        <Icon icon="akar-icons:github-fill" />
                      </Link>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </Layout>
  );
}
