



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta content="origin-when-cross-origin" name="referrer" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/frameworks-31e369ccd2b23a1eccde83f03ef36eafff1f7b9025f6042ccac33a7915753de2.css" integrity="sha256-MeNpzNKyOh7M3oPwPvNur/8fe5Al9gQsysM6eRV1PeI=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-f964283b99f20d92fe5346982864f2796de431ee296e34e16af033df93d57c15.css" integrity="sha256-+WQoO5nyDZL+U0aYKGTyeW3kMe4pbjThavAz35PVfBU=" media="all" rel="stylesheet" />
    
    
    
    

    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=device-width">
    
    <title>paxata/webpack.prod.js at UIINFRA-4-3 · Paxata/paxata</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" href="/apple-touch-icon.png">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-57x57.png">
    <link rel="apple-touch-icon" sizes="60x60" href="/apple-touch-icon-60x60.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-72x72.png">
    <link rel="apple-touch-icon" sizes="76x76" href="/apple-touch-icon-76x76.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114x114.png">
    <link rel="apple-touch-icon" sizes="120x120" href="/apple-touch-icon-120x120.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144x144.png">
    <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon-152x152.png">
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon-180x180.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="https://avatars0.githubusercontent.com/u/1882127?v=3&amp;s=400" name="twitter:image:src" /><meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="Paxata/paxata" name="twitter:title" /><meta content="paxata - Paxata App" name="twitter:description" />
      <meta content="https://avatars0.githubusercontent.com/u/1882127?v=3&amp;s=400" property="og:image" /><meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="Paxata/paxata" property="og:title" /><meta content="https://github.com/Paxata/paxata" property="og:url" /><meta content="paxata - Paxata App" property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="web-socket" href="wss://live.github.com/_sockets/MTMxOTE1MTo4NjBlZWRmM2IxMzMzODIwNmNhYjcwZGMxYWY1MTM2ODo5NmQzZTI2NzI3OWVmNTlmYzNiZWE2OGM5ZjE4NWE0NDIwYzc0ZGRiNTlhZDkyNTQ0OWMxYjJhMTBlZGQ3MmY1--5ab5a1d8b6e84711bb097249aea1f3425f99554b">
    <meta name="pjax-timeout" content="1000">
    <link rel="sudo-modal" href="/sessions/sudo_modal">
    <meta name="request-id" content="63486C43:6297:FE82619:582B96AA" data-pjax-transient>

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
<meta name="google-site-verification" content="ZzhVyEFwb7w3e0-uOTltm8Jsck2F5StVihD0exw2fsA">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="63486C43:6297:FE82619:582B96AA" name="octolytics-dimension-request_id" /><meta content="1319151" name="octolytics-actor-id" /><meta content="jrgleason" name="octolytics-actor-login" /><meta content="38dd8e9273b8ca98a07b11992f043b803f773692a7f5679a1b0ca842bc82214d" name="octolytics-actor-hash" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />



  <meta class="js-ga-set" name="dimension1" content="Logged In">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="jrgleason">

        <meta name="expected-hostname" content="github.com">
      <meta name="js-proxy-site-detection-payload" content="Y2IyOThjNDk2ODA3OGJkOWNjN2I5ZjI2NjNlMzA4ZGQ5Y2JjYjJlN2RkNDgzZjlhNjA3ODAxZTJlOTVkNjAxM3x7InJlbW90ZV9hZGRyZXNzIjoiOTkuNzIuMTA4LjY3IiwicmVxdWVzdF9pZCI6IjYzNDg2QzQzOjYyOTc6RkU4MjYxOTo1ODJCOTZBQSIsInRpbWVzdGFtcCI6MTQ3OTI1MTYzMywiaG9zdCI6ImdpdGh1Yi5jb20ifQ==">


      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta name="html-safe-nonce" content="727cc8f33ba3555438102a0ddfe9e4673566cff1">
    <meta content="2efc674df7a1cd8c595db53386b90c117463b309" name="form-nonce" />

    <meta http-equiv="x-pjax-version" content="44b0514a6399849764809c7571997ea0">
    

      
  <meta name="description" content="paxata - Paxata App">
  <meta name="go-import" content="github.com/Paxata/paxata git https://github.com/Paxata/paxata.git">

  <meta content="1882127" name="octolytics-dimension-user_id" /><meta content="Paxata" name="octolytics-dimension-user_login" /><meta content="5264867" name="octolytics-dimension-repository_id" /><meta content="Paxata/paxata" name="octolytics-dimension-repository_nwo" /><meta content="false" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="5264867" name="octolytics-dimension-repository_network_root_id" /><meta content="Paxata/paxata" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/Paxata/paxata/commits/UIINFRA-4-3.atom?token=ABQg75Vqc78WIw_tXD6_Fh9CdWVpZFYVks62N3exwA%3D%3D" rel="alternate" title="Recent Commits to paxata:UIINFRA-4-3" type="application/atom+xml">


      <link rel="canonical" href="https://github.com/Paxata/paxata/blob/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" data-pjax-transient>
  </head>


  <body class="logged-in  env-production windows vis-private page-blob">
    <div id="js-pjax-loader-bar" class="pjax-loader-bar"><div class="progress"></div></div>
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



        <div class="header header-logged-in true" role="banner">
  <div class="container clearfix">

    <a class="header-logo-invertocat" href="https://github.com/" data-hotkey="g d" aria-label="Homepage" data-ga-click="Header, go to dashboard, icon:logo">
  <svg aria-hidden="true" class="octicon octicon-mark-github" height="28" version="1.1" viewBox="0 0 16 16" width="28"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>


        <div class="header-search scoped-search site-scoped-search js-site-search" role="search">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/search" class="js-site-search-form" data-scoped-search-url="/Paxata/paxata/search" data-unscoped-search-url="/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <label class="form-control header-search-wrapper js-chromeless-input-container">
      <div class="header-search-scope">This repository</div>
      <input type="text"
        class="form-control header-search-input js-site-search-focus js-site-search-field is-clearable"
        data-hotkey="s"
        name="q"
        placeholder="Search"
        aria-label="Search this repository"
        data-unscoped-placeholder="Search GitHub"
        data-scoped-placeholder="Search"
        autocapitalize="off">
    </label>
</form></div>


      <ul class="header-nav float-left" role="navigation">
        <li class="header-nav-item">
          <a href="/pulls" aria-label="Pull requests you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:pulls context:user" data-hotkey="g p" data-selected-links="/pulls /pulls/assigned /pulls/mentioned /pulls">
            Pull requests
</a>        </li>
        <li class="header-nav-item">
          <a href="/issues" aria-label="Issues you created" class="js-selected-navigation-item header-nav-link" data-ga-click="Header, click, Nav menu - item:issues context:user" data-hotkey="g i" data-selected-links="/issues /issues/assigned /issues/mentioned /issues">
            Issues
</a>        </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://gist.github.com/" data-ga-click="Header, go to gist, text:gist">Gist</a>
          </li>
      </ul>

    
<ul class="header-nav user-nav float-right" id="user-links">
  <li class="header-nav-item">
    
    <a href="/notifications" aria-label="You have unread notifications" class="header-nav-link notification-indicator tooltipped tooltipped-s js-socket-channel js-notification-indicator" data-channel="tenant:1:notification-changed:1319151" data-ga-click="Header, go to notifications, icon:unread" data-hotkey="g n">
        <span class="mail-status unread"></span>
        <svg aria-hidden="true" class="octicon octicon-bell" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 12v1H0v-1l.73-.58c.77-.77.81-2.55 1.19-4.42C2.69 3.23 6 2 6 2c0-.55.45-1 1-1s1 .45 1 1c0 0 3.39 1.23 4.16 5 .38 1.88.42 3.66 1.19 4.42l.66.58H14zm-7 4c1.11 0 2-.89 2-2H5c0 1.11.89 2 2 2z"/></svg>
</a>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link tooltipped tooltipped-s js-menu-target" href="/new"
       aria-label="Create new…"
       data-ga-click="Header, create new, icon:add">
      <svg aria-hidden="true" class="octicon octicon-plus float-left" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 9H7v5H5V9H0V7h5V2h2v5h5z"/></svg>
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <ul class="dropdown-menu dropdown-menu-sw">
        
<a class="dropdown-item" href="/new" data-ga-click="Header, create new repository">
  New repository
</a>

  <a class="dropdown-item" href="/new/import" data-ga-click="Header, import a repository">
    Import repository
  </a>

<a class="dropdown-item" href="https://gist.github.com/" data-ga-click="Header, create new gist">
  New gist
</a>

  <a class="dropdown-item" href="/organizations/new" data-ga-click="Header, create new organization">
    New organization
  </a>



  <div class="dropdown-divider"></div>
  <div class="dropdown-header">
    <span title="Paxata/paxata">This repository</span>
  </div>
    <a class="dropdown-item" href="/Paxata/paxata/issues/new" data-ga-click="Header, create new issue">
      New issue
    </a>

      </ul>
    </div>
  </li>

  <li class="header-nav-item dropdown js-menu-container">
    <a class="header-nav-link name tooltipped tooltipped-sw js-menu-target" href="/jrgleason"
       aria-label="View profile and more"
       data-ga-click="Header, show menu, icon:avatar">
      <img alt="@jrgleason" class="avatar" height="20" src="https://avatars2.githubusercontent.com/u/1319151?v=3&amp;s=40" width="20" />
      <span class="dropdown-caret"></span>
    </a>

    <div class="dropdown-menu-content js-menu-content">
      <div class="dropdown-menu dropdown-menu-sw">
        <div class="dropdown-header header-nav-current-user css-truncate">
          Signed in as <strong class="css-truncate-target">jrgleason</strong>
        </div>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/jrgleason" data-ga-click="Header, go to profile, text:your profile">
          Your profile
        </a>
        <a class="dropdown-item" href="/jrgleason?tab=stars" data-ga-click="Header, go to starred repos, text:your stars">
          Your stars
        </a>
        <a class="dropdown-item" href="/explore" data-ga-click="Header, go to explore, text:explore">
          Explore
        </a>
          <a class="dropdown-item" href="/integrations" data-ga-click="Header, go to integrations, text:integrations">
            Integrations
          </a>
        <a class="dropdown-item" href="https://help.github.com" data-ga-click="Header, go to help, text:help">
          Help
        </a>

        <div class="dropdown-divider"></div>

        <a class="dropdown-item" href="/settings/profile" data-ga-click="Header, go to settings, icon:settings">
          Settings
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/logout" class="logout-form" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="zCxe/SJ/JsP4D+0GBLyk8XzlftOxkfEF/H3Z8Xft7W5LML4egLK+JVMQRvpDv2+hlSrYux2CJcnP4DhOaaK9PA==" /></div>
          <button type="submit" class="dropdown-item dropdown-signout" data-ga-click="Header, sign out, icon:logout">
            Sign out
          </button>
</form>      </div>
    </div>
  </li>
</ul>


    
  </div>
</div>


      


    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main">
        <div itemscope itemtype="http://schema.org/SoftwareSourceCode">
    <div id="js-repo-pjax-container" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/notifications/subscribe" class="js-social-container" data-autosubmit="true" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="Y+NzWwq9haGzk05ArFX4e+D+e0vC85qrltD+Sluw0B6F4WPYDWL8VIcTAcnfnbAq4sJ+ZvcBK0UIhr9UeFgiSQ==" /></div>      <input class="form-control" id="repository_id" name="repository_id" type="hidden" value="5264867" />

        <div class="select-menu js-menu-container js-select-menu">
          <a href="/Paxata/paxata/subscription"
            class="btn btn-sm btn-with-count select-menu-button js-menu-target" role="button" tabindex="0" aria-haspopup="true"
            data-ga-click="Repository, click Watch settings, action:blob#show">
            <span class="js-select-button">
              <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
              Unwatch
            </span>
          </a>
          <a class="social-count js-social-count"
            href="/Paxata/paxata/watchers"
            aria-label="39 users are watching this repository">
            39
          </a>

        <div class="select-menu-modal-holder">
          <div class="select-menu-modal subscription-menu-modal js-menu-content" aria-hidden="true">
            <div class="select-menu-header js-navigation-enable" tabindex="-1">
              <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
              <span class="select-menu-title">Notifications</span>
            </div>

              <div class="select-menu-list js-navigation-container" role="menu">

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_included" name="do" type="radio" value="included" />
                    <span class="select-menu-item-heading">Not watching</span>
                    <span class="description">Be notified when participating or @mentioned.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Watch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item selected" role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input checked="checked" id="do_subscribed" name="do" type="radio" value="subscribed" />
                    <span class="select-menu-item-heading">Watching</span>
                    <span class="description">Be notified of all conversations.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-eye" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.06 2C3 2 0 8 0 8s3 6 8.06 6C13 14 16 8 16 8s-3-6-7.94-6zM8 12c-2.2 0-4-1.78-4-4 0-2.2 1.8-4 4-4 2.22 0 4 1.8 4 4 0 2.22-1.78 4-4 4zm2-4c0 1.11-.89 2-2 2-1.11 0-2-.89-2-2 0-1.11.89-2 2-2 1.11 0 2 .89 2 2z"/></svg>
                      Unwatch
                    </span>
                  </div>
                </div>

                <div class="select-menu-item js-navigation-item " role="menuitem" tabindex="0">
                  <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
                  <div class="select-menu-item-text">
                    <input id="do_ignore" name="do" type="radio" value="ignore" />
                    <span class="select-menu-item-heading">Ignoring</span>
                    <span class="description">Never be notified.</span>
                    <span class="js-select-button-text hidden-select-button-text">
                      <svg aria-hidden="true" class="octicon octicon-mute" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8 2.81v10.38c0 .67-.81 1-1.28.53L3 10H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h2l3.72-3.72C7.19 1.81 8 2.14 8 2.81zm7.53 3.22l-1.06-1.06-1.97 1.97-1.97-1.97-1.06 1.06L11.44 8 9.47 9.97l1.06 1.06 1.97-1.97 1.97 1.97 1.06-1.06L13.56 8l1.97-1.97z"/></svg>
                      Stop ignoring
                    </span>
                  </div>
                </div>

              </div>

            </div>
          </div>
        </div>
</form>
  </li>

  <li>
    
  <div class="js-toggler-container js-social-container starring-container on">

    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/unstar" class="starred" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="SEoiCGoY47Lp2Qftf0TAH0Uvdh7vtqxEKNh1VJ/gk51qh/oXYUy3O20qSyYw2vAxekz0rz6DhNWVOAnMzjnSRw==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Unstar this repository" title="Unstar Paxata/paxata"
        data-ga-click="Repository, click unstar button, action:blob#show; text:Unstar">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Unstar
      </button>
        <a class="social-count js-social-count" href="/Paxata/paxata/stargazers"
           aria-label="4 users starred this repository">
          4
        </a>
</form>
    <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/star" class="unstarred" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" data-remote="true" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="lllCBIdwd8AoeLhLk632oUpuz7DKyP+C/e9qeEP5m51nFhVFuNXrEW0r0l9hu5K+iiE9dL1LW/FIJipNpVldtg==" /></div>
      <button
        type="submit"
        class="btn btn-sm btn-with-count js-toggler-target"
        aria-label="Star this repository" title="Star Paxata/paxata"
        data-ga-click="Repository, click star button, action:blob#show; text:Star">
        <svg aria-hidden="true" class="octicon octicon-star" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74z"/></svg>
        Star
      </button>
        <a class="social-count js-social-count" href="/Paxata/paxata/stargazers"
           aria-label="4 users starred this repository">
          4
        </a>
</form>  </div>

  </li>

  <li>
          <a href="#fork-destination-box" class="btn btn-sm btn-with-count"
              title="Fork your own copy of Paxata/paxata to your account"
              aria-label="Fork your own copy of Paxata/paxata to your account"
              rel="facebox"
              data-ga-click="Repository, show fork modal, action:blob#show; text:Fork">
              <svg aria-hidden="true" class="octicon octicon-repo-forked" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M8 1a1.993 1.993 0 0 0-1 3.72V6L5 8 3 6V4.72A1.993 1.993 0 0 0 2 1a1.993 1.993 0 0 0-1 3.72V6.5l3 3v1.78A1.993 1.993 0 0 0 5 15a1.993 1.993 0 0 0 1-3.72V9.5l3-3V4.72A1.993 1.993 0 0 0 8 1zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3 10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm3-10c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            Fork
          </a>

          <div id="fork-destination-box" style="display: none;">
            <h2 class="facebox-header" data-facebox-id="facebox-header">Where should we fork this repository?</h2>
            <include-fragment src=""
                class="js-fork-select-fragment fork-select-fragment"
                data-url="/Paxata/paxata/fork?fragment=1">
              <img alt="Loading" height="64" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-128.gif" width="64" />
            </include-fragment>
          </div>

    <a href="/Paxata/paxata/network" class="social-count"
       aria-label="0 users forked this repository">
      0
    </a>
  </li>
</ul>

    <h1 class="private ">
  <svg aria-hidden="true" class="octicon octicon-lock" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M4 13H3v-1h1v1zm8-6v7c0 .55-.45 1-1 1H1c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h1V4c0-2.2 1.8-4 4-4s4 1.8 4 4v2h1c.55 0 1 .45 1 1zM3.8 6h4.41V4c0-1.22-.98-2.2-2.2-2.2-1.22 0-2.2.98-2.2 2.2v2H3.8zM11 7H2v7h9V7zM4 8H3v1h1V8zm0 2H3v1h1v-1z"/></svg>
  <span class="author" itemprop="author"><a href="/Paxata" class="url fn" rel="author">Paxata</a></span><!--
--><span class="path-divider">/</span><!--
--><strong itemprop="name"><a href="/Paxata/paxata" data-pjax="#js-repo-pjax-container">paxata</a></strong>
    <span class="label label-private v-align-middle">Private</span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax"
     itemscope
     itemtype="http://schema.org/BreadcrumbList"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Paxata/paxata/tree/UIINFRA-4-3" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /Paxata/paxata/tree/UIINFRA-4-3" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-code" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M9.5 3L8 4.5 11.5 8 8 11.5 9.5 13 14 8 9.5 3zm-5 0L0 8l4.5 5L6 11.5 2.5 8 6 4.5 4.5 3z"/></svg>
      <span itemprop="name">Code</span>
      <meta itemprop="position" content="1">
</a>  </span>

    <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
      <a href="/Paxata/paxata/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /Paxata/paxata/issues" itemprop="url">
        <svg aria-hidden="true" class="octicon octicon-issue-opened" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"/></svg>
        <span itemprop="name">Issues</span>
        <span class="counter">1</span>
        <meta itemprop="position" content="2">
</a>    </span>

  <span itemscope itemtype="http://schema.org/ListItem" itemprop="itemListElement">
    <a href="/Paxata/paxata/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /Paxata/paxata/pulls" itemprop="url">
      <svg aria-hidden="true" class="octicon octicon-git-pull-request" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 11.28V5c-.03-.78-.34-1.47-.94-2.06C9.46 2.35 8.78 2.03 8 2H7V0L4 3l3 3V4h1c.27.02.48.11.69.31.21.2.3.42.31.69v6.28A1.993 1.993 0 0 0 10 15a1.993 1.993 0 0 0 1-3.72zm-1 2.92c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zM4 3c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v6.56A1.993 1.993 0 0 0 2 15a1.993 1.993 0 0 0 1-3.72V4.72c.59-.34 1-.98 1-1.72zm-.8 10c0 .66-.55 1.2-1.2 1.2-.65 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2zM2 4.2C1.34 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
      <span itemprop="name">Pull requests</span>
      <span class="counter">34</span>
      <meta itemprop="position" content="3">
</a>  </span>

  <a href="/Paxata/paxata/projects" class="js-selected-navigation-item reponav-item" data-selected-links="repo_projects new_repo_project repo_project /Paxata/paxata/projects">
    <svg aria-hidden="true" class="octicon octicon-project" height="16" version="1.1" viewBox="0 0 15 16" width="15"><path fill-rule="evenodd" d="M10 12h3V2h-3v10zm-4-2h3V2H6v8zm-4 4h3V2H2v12zm-1 1h13V1H1v14zM14 0H1a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1z"/></svg>
    Projects
    <span class="counter">0</span>
</a>
    <a href="/Paxata/paxata/wiki" class="js-selected-navigation-item reponav-item" data-hotkey="g w" data-selected-links="repo_wiki /Paxata/paxata/wiki">
      <svg aria-hidden="true" class="octicon octicon-book" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M3 5h4v1H3V5zm0 3h4V7H3v1zm0 2h4V9H3v1zm11-5h-4v1h4V5zm0 2h-4v1h4V7zm0 2h-4v1h4V9zm2-6v9c0 .55-.45 1-1 1H9.5l-1 1-1-1H2c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h5.5l1 1 1-1H15c.55 0 1 .45 1 1zm-8 .5L7.5 3H2v9h6V3.5zm7-.5H9.5l-.5.5V12h6V3z"/></svg>
      Wiki
</a>

  <a href="/Paxata/paxata/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /Paxata/paxata/pulse">
    <svg aria-hidden="true" class="octicon octicon-pulse" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M11.5 8L8.8 5.4 6.6 8.5 5.5 1.6 2.38 8H0v2h3.6l.9-1.8.9 5.4L9 8.5l1.6 1.5H14V8z"/></svg>
    Pulse
</a>
  <a href="/Paxata/paxata/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /Paxata/paxata/graphs">
    <svg aria-hidden="true" class="octicon octicon-graph" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M16 14v1H0V0h1v14h15zM5 13H3V8h2v5zm4 0H7V3h2v10zm4 0h-2V6h2v7z"/></svg>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/Paxata/paxata/blob/9aa17c6961e409d0b5e5636ae9fd985d66e85843/paxata-ui/ui-components/conf/webpack.prod.js" class="d-none js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:cc318102be1694017404e27a961d90be -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu branch-select-menu js-menu-container js-select-menu float-left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">UIINFRA-4-3</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <svg aria-label="Close" class="octicon octicon-x js-menu-close" height="16" role="img" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Find or create a branch…" id="context-commitish-filter-field" class="form-control js-filterable-field js-navigation-enable" placeholder="Find or create a branch…">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Find or create a branch…" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/DOC-232%3BDOC-248_Mel_UI_help/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="DOC-232;DOC-248_Mel_UI_help"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                DOC-232;DOC-248_Mel_UI_help
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/DOC-249_Mel_UI_help/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="DOC-249_Mel_UI_help"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                DOC-249_Mel_UI_help
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/DOC-251_Mel_UI_help/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="DOC-251_Mel_UI_help"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                DOC-251_Mel_UI_help
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/INFRA-753-username-case-insensitive/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="INFRA-753-username-case-insensitive"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                INFRA-753-username-case-insensitive
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/LIB-1714/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="LIB-1714"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                LIB-1714
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/MetadataPageStyling/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="MetadataPageStyling"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                MetadataPageStyling
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/UIINFRA-4-3-NODE/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIINFRA-4-3-NODE"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIINFRA-4-3-NODE
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/Paxata/paxata/blob/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIINFRA-4-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIINFRA-4-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/UIINFRA/UIINFRA-4-2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIINFRA/UIINFRA-4-2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIINFRA/UIINFRA-4-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/UIInfra/UIINFRA-4-2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIInfra/UIINFRA-4-2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIInfra/UIINFRA-4-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/UIInfra/UIINFRA-4-GIT-TEST/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIInfra/UIINFRA-4-GIT-TEST"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIInfra/UIINFRA-4-GIT-TEST
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/UIInfra/UIINFRA-4/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="UIInfra/UIINFRA-4"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                UIInfra/UIINFRA-4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/apps-2282/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="apps-2282"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                apps-2282
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/archive/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="archive"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                archive
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1259/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1259"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1259
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1327/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1327"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1327
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1351/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1351"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1351
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1405/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1405"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1405
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1439/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1439"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1439
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1478-XMLFormatterTest-et-al/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1478-XMLFormatterTest-et-al"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1478-XMLFormatterTest-et-al
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1531/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1531"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1531
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1604/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1604"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1604
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1633/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1633"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1633
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1645/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1645"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1645
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1699_master/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1699_master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1699_master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/LIB-1722/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/LIB-1722"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/LIB-1722
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/lib-1699/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/lib-1699"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/lib-1699
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/lib-1733/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/lib-1733"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/lib-1733
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bug/uniqueName/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bug/uniqueName"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bug/uniqueName
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bugfix/LIB-1700/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bugfix/LIB-1700"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/LIB-1700
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bugfix/LIB-1701/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bugfix/LIB-1701"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/LIB-1701
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bugfix/doNotCacheLibraryItems/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bugfix/doNotCacheLibraryItems"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/doNotCacheLibraryItems
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/bugfix/largeJsonXml/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="bugfix/largeJsonXml"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                bugfix/largeJsonXml
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/chore/LIB-1379/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="chore/LIB-1379"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                chore/LIB-1379
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/chore/LIB-1448/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="chore/LIB-1448"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                chore/LIB-1448
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/connector_versioning/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="connector_versioning"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                connector_versioning
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/feature/LIB-1127_FirstPass/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="feature/LIB-1127_FirstPass"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/LIB-1127_FirstPass
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/feature/dt-ui/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="feature/dt-ui"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/dt-ui
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/feature/importPerfImprovements/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="feature/importPerfImprovements"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/importPerfImprovements
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/feature/lib-1682/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="feature/lib-1682"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/lib-1682
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/feature/upgradeConnectorV2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="feature/upgradeConnectorV2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                feature/upgradeConnectorV2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/features/LIB-1052/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="features/LIB-1052"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                features/LIB-1052
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/features/LIB-1507/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="features/LIB-1507"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                features/LIB-1507
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/fix-jackie-2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="fix-jackie-2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                fix-jackie-2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/guardrail-upgrade/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="guardrail-upgrade"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                guardrail-upgrade
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/feature/library-cleanup/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/feature/library-cleanup"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/feature/library-cleanup
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/feature/pax-ui-forms/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/feature/pax-ui-forms"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/feature/pax-ui-forms
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/feature/scrollable-table-final/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/feature/scrollable-table-final"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/feature/scrollable-table-final
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/features/expression-filters/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/features/expression-filters"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/features/expression-filters
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/master-staging-3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/master-staging-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/master-staging-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/poc/voice-command/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/poc/voice-command"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/poc/voice-command
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ian/ui3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ian/ui3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ian/ui3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/infra-582/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="infra-582"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                infra-582
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/jgu/APPS-2879/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="jgu/APPS-2879"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                jgu/APPS-2879
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/jgu/automation-form/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="jgu/automation-form"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                jgu/automation-form
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/library_paging/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="library_paging"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                library_paging
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/local/ng1_point/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="local/ng1_point"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                local/ng1_point
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/log_msg/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="log_msg"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                log_msg
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/master-3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="master-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/master/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                master
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/multi-tenant-authorize-user/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="multi-tenant-authorize-user"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                multi-tenant-authorize-user
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/multi-tenant-main/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="multi-tenant-main"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                multi-tenant-main
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/multi-tenant-ui/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="multi-tenant-ui"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                multi-tenant-ui
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ns/APPS-2864/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ns/APPS-2864"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ns/APPS-2864
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/ns/APPS-2867/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="ns/APPS-2867"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                ns/APPS-2867
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/null-record-values/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="null-record-values"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                null-record-values
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/gradle/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/gradle"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/gradle
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/ng1_webpack_old_dependencies/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/ng1_webpack_old_dependencies"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/ng1_webpack_old_dependencies
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/ng1_webpack/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/ng1_webpack"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/ng1_webpack
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/ng1_wp_karma/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/ng1_wp_karma"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/ng1_wp_karma
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/ng1_wp_od_profiles/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/ng1_wp_od_profiles"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/ng1_wp_od_profiles
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/ng_2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/ng_2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/ng_2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/playing/webpack-add-ng2/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="playing/webpack-add-ng2"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                playing/webpack-add-ng2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/record-iterator-perf/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="record-iterator-perf"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                record-iterator-perf
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/release-3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="release-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/release/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="release"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                release
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/releases/release-2.9/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="releases/release-2.9"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                releases/release-2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/releases/release-2.12/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="releases/release-2.12"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                releases/release-2.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/releases/release-2.13/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="releases/release-2.13"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                releases/release-2.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/releases/release-2.14/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="releases/release-2.14"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                releases/release-2.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/releases/release-2.15/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="releases/release-2.15"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                releases/release-2.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/rwong/library_paging/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="rwong/library_paging"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                rwong/library_paging
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/rx/apps-2869/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="rx/apps-2869"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                rx/apps-2869
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/rx/apps-2893/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="rx/apps-2893"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                rx/apps-2893
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/rx/apps-2894/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="rx/apps-2894"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                rx/apps-2894
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/sas/externalized_text_fixes/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="sas/externalized_text_fixes"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sas/externalized_text_fixes
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/sas/merge_2.14/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="sas/merge_2.14"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                sas/merge_2.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging-3-dev/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging-3-dev"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging-3-dev
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging-3/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging-3"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging-3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging-fixed/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging-fixed"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging-fixed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging-merge-conflict/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging-merge-conflict"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging-merge-conflict
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/staging_10_20/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="staging_10_20"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                staging_10_20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/tm-guardrails/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="tm-guardrails"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tm-guardrails
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/tm/infra-497/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="tm/infra-497"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tm/infra-497
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/tom.wang/dt/error.parse.eval/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="tom.wang/dt/error.parse.eval"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                tom.wang/dt/error.parse.eval
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/unseen-strings/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="unseen-strings"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                unseen-strings
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/version_container/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="version_container"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                version_container
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
               href="/Paxata/paxata/blob/wide-datasets-issue/paxata-ui/ui-components/conf/webpack.prod.js"
               data-name="wide-datasets-issue"
               data-skip-pjax="true"
               rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target js-select-menu-filter-text">
                wide-datasets-issue
              </span>
            </a>
        </div>

          <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/branches" class="js-create-branch select-menu-item select-menu-new-item-form js-navigation-item js-new-item-form" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="46ottOw0BaBTTtmrOAf6ey8F7+dgsfWXoPW6F5qM8D51PcABZepOWozZrz5iFe958dzBVLtKwaT3LhzMYx9G1g==" /></div>
          <svg aria-hidden="true" class="octicon octicon-git-branch select-menu-item-icon" height="16" version="1.1" viewBox="0 0 10 16" width="10"><path fill-rule="evenodd" d="M10 5c0-1.11-.89-2-2-2a1.993 1.993 0 0 0-1 3.72v.3c-.02.52-.23.98-.63 1.38-.4.4-.86.61-1.38.63-.83.02-1.48.16-2 .45V4.72a1.993 1.993 0 0 0-1-3.72C.88 1 0 1.89 0 3a2 2 0 0 0 1 1.72v6.56c-.59.35-1 .99-1 1.72 0 1.11.89 2 2 2 1.11 0 2-.89 2-2 0-.53-.2-1-.53-1.36.09-.06.48-.41.59-.47.25-.11.56-.17.94-.17 1.05-.05 1.95-.45 2.75-1.25S8.95 7.77 9 6.73h-.02C9.59 6.37 10 5.73 10 5zM2 1.8c.66 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2C1.35 4.2.8 3.65.8 3c0-.65.55-1.2 1.2-1.2zm0 12.41c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2zm6-8c-.66 0-1.2-.55-1.2-1.2 0-.65.55-1.2 1.2-1.2.65 0 1.2.55 1.2 1.2 0 .65-.55 1.2-1.2 1.2z"/></svg>
            <div class="select-menu-item-text">
              <span class="select-menu-item-heading">Create branch: <span class="js-new-item-name"></span></span>
              <span class="description">from ‘UIINFRA-4-3’</span>
            </div>
            <input type="hidden" name="name" id="name" class="js-new-item-value">
            <input type="hidden" name="branch" id="branch" value="UIINFRA-4-3">
            <input type="hidden" name="path" id="path" value="paxata-ui/ui-components/conf/webpack.prod.js">
</form>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/minimal.ui.decl.no.datatype.needed/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="minimal.ui.decl.no.datatype.needed"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="minimal.ui.decl.no.datatype.needed">
                minimal.ui.decl.no.datatype.needed
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/Strata_01/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="Strata_01"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="Strata_01">
                Strata_01
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/3.0.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="3.0.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.1">
                3.0.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/3.0.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="3.0.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="3.0.0">
                3.0.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.8/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.8">
                2.15.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.7">
                2.15.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.5">
                2.15.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.4">
                2.15.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.3">
                2.15.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.2">
                2.15.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.15.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.15.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.15.0">
                2.15.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.31/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.31"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.31">
                2.14.31
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.30/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.30"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.30">
                2.14.30
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.22/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.22"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.22">
                2.14.22
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.20/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.20"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.20">
                2.14.20
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.16/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.16">
                2.14.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.13/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.13">
                2.14.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.10/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.10">
                2.14.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.9/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.9">
                2.14.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.5">
                2.14.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.2">
                2.14.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.1">
                2.14.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.14.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.14.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.14.0">
                2.14.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.7">
                2.13.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.6">
                2.13.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.4">
                2.13.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.3">
                2.13.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.2">
                2.13.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.1">
                2.13.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.13.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.13.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.13.0">
                2.13.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.12.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.12.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.12.0">
                2.12.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.10/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.10">
                2.11.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.9/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.9">
                2.11.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.7">
                2.11.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.6">
                2.11.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.5">
                2.11.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.4">
                2.11.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.3">
                2.11.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.1">
                2.11.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.11.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.11.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.11.0">
                2.11.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.10.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.10.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.10.2">
                2.10.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.10.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.10.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.10.1">
                2.10.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.10.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.10.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.10.0">
                2.10.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.7">
                2.9.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.6">
                2.9.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.5">
                2.9.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.4">
                2.9.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.3">
                2.9.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.1">
                2.9.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.9.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.9.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.9.0">
                2.9.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.16/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.16"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.16">
                2.8.16
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.15/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.15">
                2.8.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.14/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.14">
                2.8.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.13/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.13">
                2.8.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.12/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.12"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.12">
                2.8.12
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.11/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.11"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.11">
                2.8.11
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.9/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.9">
                2.8.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.8/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.8">
                2.8.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.6">
                2.8.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.5">
                2.8.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.4">
                2.8.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.3">
                2.8.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.2">
                2.8.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.2_db/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.2_db"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.2_db">
                2.8.2_db
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.1">
                2.8.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.1_db/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.1_db"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.1_db">
                2.8.1_db
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.8.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.8.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.8.0">
                2.8.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.7.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.7.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.7">
                2.7.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.7.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.7.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.6">
                2.7.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.7.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.7.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.5">
                2.7.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.7.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.7.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.3">
                2.7.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.7.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.7.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.7.2">
                2.7.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.6.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.6.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.4">
                2.6.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.6.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.6.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.3">
                2.6.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.6.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.6.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.2">
                2.6.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.6.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.6.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.1">
                2.6.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.6.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.6.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.6.0">
                2.6.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.5.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.5.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.1">
                2.5.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.5.0/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.5.0"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.5.0">
                2.5.0
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.4.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.4.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.4.2">
                2.4.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.3.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.3.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.6">
                2.3.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.3.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.3.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.4">
                2.3.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.3.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.3.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.3">
                2.3.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.3.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.3.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.2">
                2.3.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.3.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.3.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.3.1">
                2.3.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.15/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.15"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.15">
                2.2.15
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.14/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.14"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.14">
                2.2.14
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.13/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.13"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.13">
                2.2.13
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.10/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.10"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.10">
                2.2.10
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.9/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.9"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.9">
                2.2.9
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.8/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.8">
                2.2.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.7/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.7"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.7">
                2.2.7
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.6">
                2.2.6
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.5/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.5"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.5">
                2.2.5
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.4/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.4"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.4">
                2.2.4
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.3/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.3"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.3">
                2.2.3
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.2/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.2"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.2">
                2.2.2
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.2.1/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.2.1"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.2.1">
                2.2.1
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.1.8/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.1.8"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.8">
                2.1.8
              </span>
            </a>
            <a class="select-menu-item js-navigation-item js-navigation-open "
              href="/Paxata/paxata/tree/2.1.6/paxata-ui/ui-components/conf/webpack.prod.js"
              data-name="2.1.6"
              data-skip-pjax="true"
              rel="nofollow">
              <svg aria-hidden="true" class="octicon octicon-check select-menu-item-icon" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5z"/></svg>
              <span class="select-menu-item-text css-truncate-target" title="2.1.6">
                2.1.6
              </span>
            </a>
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="BtnGroup float-right">
    <a href="/Paxata/paxata/find/UIINFRA-4-3"
          class="js-pjax-capture-input btn btn-sm BtnGroup-item"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm BtnGroup-item tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span class="js-path-segment"><a href="/Paxata/paxata/tree/UIINFRA-4-3"><span>paxata</span></a></span></span><span class="separator">/</span><span class="js-path-segment"><a href="/Paxata/paxata/tree/UIINFRA-4-3/paxata-ui"><span>paxata-ui</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/Paxata/paxata/tree/UIINFRA-4-3/paxata-ui/ui-components"><span>ui-components</span></a></span><span class="separator">/</span><span class="js-path-segment"><a href="/Paxata/paxata/tree/UIINFRA-4-3/paxata-ui/ui-components/conf"><span>conf</span></a></span><span class="separator">/</span><strong class="final-path">webpack.prod.js</strong>
  </div>
</div>

<include-fragment class="commit-tease" src="/Paxata/paxata/contributors/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js">
  <div>
    Fetching contributors&hellip;
  </div>

  <div class="commit-tease-contributors">
    <img alt="" class="loader-loading float-left" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32-EAF2F5.gif" width="16" />
    <span class="loader-error">Cannot retrieve contributors at this time</span>
  </div>
</include-fragment>
<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="BtnGroup">
      <a href="/Paxata/paxata/raw/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" class="btn btn-sm BtnGroup-item" id="raw-url">Raw</a>
        <a href="/Paxata/paxata/blame/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" class="btn btn-sm js-update-url-with-hash BtnGroup-item">Blame</a>
      <a href="/Paxata/paxata/commits/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" class="btn btn-sm BtnGroup-item" rel="nofollow">History</a>
    </div>

        <a class="btn-octicon tooltipped tooltipped-nw"
           href="github-windows://openRepo/https://github.com/Paxata/paxata?branch=UIINFRA-4-3&amp;filepath=paxata-ui%2Fui-components%2Fconf%2Fwebpack.prod.js"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <svg aria-hidden="true" class="octicon octicon-device-desktop" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"/></svg>
        </a>

        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/edit/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" class="inline-form js-update-url-with-hash" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="FXmhXWCHu/QPtr4WwyIJ1uD6p4InuThXURUHsUjktH0CsN+9q84G3xioXsb0n2Lb/PmupaRThfP4oelTWVCr9w==" /></div>
          <button class="btn-octicon tooltipped tooltipped-nw" type="submit"
            aria-label="Edit this file" data-hotkey="e" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-pencil" height="16" version="1.1" viewBox="0 0 14 16" width="14"><path fill-rule="evenodd" d="M0 12v3h3l8-8-3-3-8 8zm3 2H1v-2h1v1h1v1zm10.3-9.3L12 6 9 3l1.3-1.3a.996.996 0 0 1 1.41 0l1.59 1.59c.39.39.39 1.02 0 1.41z"/></svg>
          </button>
</form>        <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="/Paxata/paxata/delete/UIINFRA-4-3/paxata-ui/ui-components/conf/webpack.prod.js" class="inline-form" data-form-nonce="2efc674df7a1cd8c595db53386b90c117463b309" method="post"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /><input name="authenticity_token" type="hidden" value="eSE5OvPafa8AzaqZHJ8qLMijD7FhvYDt3wh8/VRzYRET3guzDoPZP/as8bm70jcmLEOWV5O9iUToZiBFQYzWWw==" /></div>
          <button class="btn-octicon btn-octicon-danger tooltipped tooltipped-nw" type="submit"
            aria-label="Delete this file" data-disable-with>
            <svg aria-hidden="true" class="octicon octicon-trashcan" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M11 2H9c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1H2c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1v9c0 .55.45 1 1 1h7c.55 0 1-.45 1-1V5c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 12H3V5h1v8h1V5h1v8h1V5h1v8h1V5h1v9zm1-10H2V3h9v1z"/></svg>
          </button>
</form>  </div>

  <div class="file-info">
      37 lines (37 sloc)
      <span class="file-info-divider"></span>
    1.17 KB
  </div>
</div>

  

  <div itemprop="text" class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-c1">webpack</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&quot;</span>webpack<span class="pl-pds">&quot;</span></span>);</td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-c1">webpackMerge</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>webpack-merge<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// used to merge webpack configs</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-c1">commonConfig</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>./webpack.common.js<span class="pl-pds">&#39;</span></span>); <span class="pl-c">// the settings that are common to prod and dev</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-c1">ENV</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">ENV</span> <span class="pl-k">=</span> <span class="pl-c1">process</span>.<span class="pl-smi">env</span>.<span class="pl-c1">NODE_ENV</span> <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>production<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-k">const</span> <span class="pl-c1">UglifyJsPlugin</span> <span class="pl-k">=</span> <span class="pl-c1">require</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>webpack/lib/optimize/UglifyJsPlugin<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line"><span class="pl-c1">module</span>.<span class="pl-en">exports</span> <span class="pl-k">=</span> <span class="pl-k">function</span> (<span class="pl-smi">options</span>) {</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">return</span> <span class="pl-en">webpackMerge</span>(<span class="pl-en">commonConfig</span>({env<span class="pl-k">:</span> <span class="pl-c1">ENV</span>}), {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// TODO: I don&#39;t like this I would like us be able to add 1 to the main then override</span></td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">    <span class="pl-c">// Instead of declaring each</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    module<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      loaders<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">        {</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">          test<span class="pl-k">:</span><span class="pl-sr"> <span class="pl-pds">/</span><span class="pl-cce">\.</span>coffee<span class="pl-k">$</span><span class="pl-pds">/</span></span>,</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">          <span class="pl-c">// We need to remove old (possibly bad) annotations and let the plugin manage them</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">          loaders<span class="pl-k">:</span> [<span class="pl-s"><span class="pl-pds">&quot;</span>ng-annotate?remove=true&amp;add=true&amp;map=false<span class="pl-pds">&quot;</span></span>]</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      ]</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">    output<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">      filename<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>[name].[chunkhash].bundle.js<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">    plugins<span class="pl-k">:</span> [</td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">new</span> <span class="pl-en">UglifyJsPlugin</span>({</td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">        beautify<span class="pl-k">:</span> <span class="pl-c1">false</span>, <span class="pl-c">//prod</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">        sourceMap<span class="pl-k">:</span> <span class="pl-c1">false</span>,</td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">        mangle<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">          screw_ie8<span class="pl-k">:</span> <span class="pl-c1">true</span>,</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">          keep_fnames<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c">//prod</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">        compress<span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">          screw_ie8<span class="pl-k">:</span> <span class="pl-c1">true</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">        }, <span class="pl-c">//prod</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">        comments<span class="pl-k">:</span> <span class="pl-c1">false</span> <span class="pl-c">//prod</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      })</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">    ]</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">  })</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">};</td>
      </tr>
</table>

  </div>

</div>

<button type="button" data-facebox="#jump-to-line" data-facebox-class="linejump" data-hotkey="l" class="d-none">Jump to Line</button>
<div id="jump-to-line" style="display:none">
  <!-- '"` --><!-- </textarea></xmp> --></option></form><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="form-control linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop js-touch-events"></div>
</div>


    </div>
  </div>

    </div>

        <div class="container site-footer-container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links float-right">
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact GitHub</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage" class="site-footer-mark" title="GitHub">
      <svg aria-hidden="true" class="octicon octicon-mark-github" height="24" version="1.1" viewBox="0 0 16 16" width="24"><path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2016 <span title="0.13441s from github-fe129-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    

    <div id="ajax-error-message" class="ajax-error-message flash flash-error">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
      </button>
      You can't perform that action at this time.
    </div>


      
      <script crossorigin="anonymous" integrity="sha256-DMR8cHsW+5TLrHHR4vXyEb6jIj7+yu+pJIYwpCKkqJk=" src="https://assets-cdn.github.com/assets/frameworks-0cc47c707b16fb94cbac71d1e2f5f211bea3223efecaefa9248630a422a4a899.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-Bj6VbE0VnYfquU1V5tJqOJ1T9OnIbmh8yjR1Kon5E8I=" src="https://assets-cdn.github.com/assets/github-063e956c4d159d87eab94d55e6d26a389d53f4e9c86e687cca34752a89f913c2.js"></script>
      
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner d-none">
      <svg aria-hidden="true" class="octicon octicon-alert" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M8.865 1.52c-.18-.31-.51-.5-.87-.5s-.69.19-.87.5L.275 13.5c-.18.31-.18.69 0 1 .19.31.52.5.87.5h13.7c.36 0 .69-.19.86-.5.17-.31.18-.69.01-1L8.865 1.52zM8.995 13h-2v-2h2v2zm0-3h-2V6h2v4z"/></svg>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
    <div class="facebox" id="facebox" style="display:none;">
  <div class="facebox-popup">
    <div class="facebox-content" role="dialog" aria-labelledby="facebox-header" aria-describedby="facebox-description">
    </div>
    <button type="button" class="facebox-close js-facebox-close" aria-label="Close modal">
      <svg aria-hidden="true" class="octicon octicon-x" height="16" version="1.1" viewBox="0 0 12 16" width="12"><path fill-rule="evenodd" d="M7.48 8l3.75 3.75-1.48 1.48L6 9.48l-3.75 3.75-1.48-1.48L4.52 8 .77 4.25l1.48-1.48L6 6.52l3.75-3.75 1.48 1.48z"/></svg>
    </button>
  </div>
</div>

  </body>
</html>

