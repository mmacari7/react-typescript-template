import SessionManagerState from './SessionManagerState'

class SessionManager {
    private static instance: SessionManager | null = null
    private static tokenKey = 'metrics-session'
    private static usernameKey = 'username'
    private sessionManagerState: SessionManagerState = {
        token: '',
        username: '',
    }

    static createInstance(): SessionManager {
        const sessionManager = new SessionManager()
        return sessionManager
    }

    static getInstance() {
        if (!SessionManager.instance) {
            SessionManager.instance = SessionManager.createInstance()
            SessionManager.instance.sessionManagerState = SessionManager.getInititalSessionManagementState()
        }
        return SessionManager.instance
    }

    static getInititalSessionManagementState(): SessionManagerState {
        const sms: SessionManagerState = {
            token: window.sessionStorage.getItem(SessionManager.tokenKey) || '',
            username: window.sessionStorage.getItem(SessionManager.usernameKey) || '',
        }

        return sms
    }

    getSessionManagementState(): SessionManagerState {
        return SessionManager.getInstance().sessionManagerState
    }

    isLoggedIn(): boolean {
        return !!SessionManager.getInstance().sessionManagerState.token
    }

    logUserOut(): void {
        window.sessionStorage.removeItem(SessionManager.tokenKey)
        window.sessionStorage.removeItem(SessionManager.usernameKey)
        SessionManager.getInstance().sessionManagerState = {
            token: '',
            username: '',
        }
    }

    setToken(token: string): void {
        window.sessionStorage.setItem(SessionManager.tokenKey, token)
        SessionManager.getInstance().sessionManagerState = {
            ...SessionManager.getInstance().sessionManagerState,
            token,
        }
    }

    setUsername(username: string): void {
        window.sessionStorage.setItem(SessionManager.usernameKey, username)
        SessionManager.getInstance().sessionManagerState = {
            ...SessionManager.getInstance().sessionManagerState,
            username,
        }
    }
}

// Using a singleton for the session manager
const sessionManager = SessionManager.getInstance()
export default sessionManager
