export type AppState =
  | {
      done: false;
    }
  | {
      done: true;
      code: string;
    }
  | {
      done: true;
      error: string;
    };

export function getAppState(): AppState {
  const url = new URL(location.href);

  const code = url.searchParams.get("code");
  const error = url.searchParams.get("error_description");

  if (code !== null) {
    return {
      done: true,
      code,
    };
  }

  if (error !== null) {
    return {
      done: true,
      error,
    };
  }

  return {
    done: false,
  };
}

export function createRedirectURL(): string {
  const url = "https://wakatime.com/oauth/authorize";

  const params = new URLSearchParams();
  params.append("response_type", "code");
  params.append("client_id", import.meta.env.VITE_CLIENT_ID);
  params.append("redirect_uri", location.origin);
  params.append("scope", ["read_logged_time"].join(","));

  return `${url}?${params.toString()}`;
}
