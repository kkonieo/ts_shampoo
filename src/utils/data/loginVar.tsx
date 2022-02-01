class LoginApiKeyClass {
    constructor(readonly id:string, readonly key:string) {
      this.id = id;
      this.key = key;
    }
};

export const naverClient = new LoginApiKeyClass(
    process.env.REACT_APP_NAVER_CLIENT_ID || "",
    process.env.REACT_APP_NAVER_SECRET_KEY || "",
);

export const githubClient = new LoginApiKeyClass(
    process.env.REACT_APP_GITHUB_CLIENT_ID || "",
    process.env.REACT_APP_GITHUB_SECRET_KEY || "",
);

export const googleClient = new LoginApiKeyClass(
    process.env.REACT_APP_GOOGLE_CLIENT_ID || "",
    process.env.REACT_APP_GOOGLE_SECRET_KEY || "",
);

