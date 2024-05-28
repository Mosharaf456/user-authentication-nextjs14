const CryptoJS = require('crypto-js');

/**
 * Encrypt the access and refresh token
 *
 * @param {string} token - Token
 * @returns {string} The encrypted token
 */
const encryptToken = (token) => {
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const encryptedToken = CryptoJS.AES.encrypt(JSON.stringify(token), secretKey).toString();
    return encryptedToken;
};

/**
 * Decrypt the access and refresh token
 *
 * @param {string} token - Token
 * @returns {string} The decryoted token
 */
const decryptToken = (token) => {
    const secretKey = process.env.REACT_APP_SECRET_KEY;
    const decryptedBytes = CryptoJS.AES.decrypt(token, secretKey);
    const decryptedToken = decryptedBytes.toString(CryptoJS.enc.Utf8);
    return decryptedToken;
};

/**
 * Set the token in the localstorage
 *
 * @param {string} name - Name of the token. ex: 'accessToken' or 'refreshToken'
 * @param {string} token - Token
 */
export const setTokenInLocalStorage = (name, token) => {
    const encryptedToken = encryptToken(token);
    localStorage.setItem(name, encryptedToken);
};

/**
 * Get the token from the localstorage
 *
 * @param {string} name - Name of the token. ex: 'accessToken' or 'refreshToken'
 * @returns {string} decryptedToken - Decrypted/Original Token or null in case of any error
 */
export const getTokenFromLocalStorage = (name) => {
    const encryptedToken = localStorage.getItem(name);
    const decryptedToken = decryptToken(encryptedToken);

    try {
        return JSON.parse(decryptedToken);
    } catch (error) {
        console.error('Error parsing decrypted token:', error);
        return null;
    }
};
