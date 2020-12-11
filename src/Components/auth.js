const Auth = {
    isAuthenticated: false,
    authenticate(userName) {
        this.isAuthenticated = true;
        localStorage.setItem('username', userName);
        document.cookie = "yummy";
        // return this.isAuthenticated;
    },
    signout() {
        this.isAuthenticated = false;
        document.cookie = "yucky";
        localStorage.removeItem('username');
    },
    getAuth() {
        return this.isAuthenticated;
    }
};

export default Auth;