## Hooks

### useAuth

Run a callback with authentication to an external service and return the data and/or the auth and loading state.

```js
import { useAuth } from "@aha-develop/react";

function LoadPullRequests(props) {
  const { loading, authed, data, fetchData } = useAuth(async (authData) => {
    const api = octokit.defaults({
      headers: { authorization: `token ${authData.token}` },
    });

    return await api(FETCH_PULL_REQUESTS_QUERY);
  });

  if (loading) {
    return <Spinner />;
  }

  if (!authed) {
    return <button onClick={fetchData}>Load pull requests</button>;
  }

  const pullRequests = data.map((pr, idx) => <PullRequest key={idx} pr={pr} />);

  return <ul>{pullRequests}</ul>;
}
```

In this example component the callback fetches the data from github. The callback will only be run if the user is authenticated with github. When the component loads it will check the authentication status. If they are not authenticated then `authed` will be false and the component can display a button to prompt the user to authenticate.

If `loading` is true then the user is authenticated and the data is being requested.

The component must be wrapped in an AuthProvider. This would usually be done at the root node:

```js
import { AuthProvider } from "@aha-develop/react";

aha.on("pullRequests", (container) => {
  ReactDOM.render(
    <AuthProvider serviceName="github" serviceParameters={{ scope: "repo" }}>
      <App />
    </AuthProvider>,
    container
  );
});
```

#### Multiple services

It's possible to use multiple services in one extension with useAuth:

```js
<AuthProvider serviceName="github">
  <AuthProvider serviceName="gitlab">
    <App />
  </AuthProvider>
</AuthProvider>
```

```js
const { data, loading, authed, fetchData } = useAuth(fetchGitlabPrs, {
  serviceName: "gitlab",
});
const { data, loading, authed, fetchData } = useAuth(fetchGithubPrs, {
  serviceName: "github",
});
```

If no serviceName is provided then the first registered AuthProvider is used.
