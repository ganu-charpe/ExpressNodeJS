export default function loginPage() {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Login Page</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            body {
                font-family: Arial, sans-serif;
                background: #f4f6f8;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
    
            .login-container {
                background: #ffffff;
                padding: 30px;
                width: 320px;
                border-radius: 8px;
                box-shadow: 0 4px 10px rgba(0,0,0,0.1);
            }
    
            .login-container h2 {
                text-align: center;
                margin-bottom: 20px;
            }
    
            .form-group {
                margin-bottom: 15px;
            }
    
            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-size: 14px;
            }
    
            .form-group input {
                width: 100%;
                padding: 10px;
                font-size: 14px;
                border: 1px solid #ccc;
                border-radius: 4px;
            }
    
            .forgot-password {
                text-align: right;
                margin-bottom: 15px;
            }
    
            .forgot-password a {
                font-size: 13px;
                color: #007bff;
                text-decoration: none;
            }
    
            .forgot-password a:hover {
                text-decoration: underline;
            }
    
            .login-btn {
                width: 100%;
                padding: 10px;
                background: #007bff;
                color: #fff;
                border: none;
                font-size: 16px;
                border-radius: 4px;
                cursor: pointer;
            }
    
            .login-btn:hover {
                background: #0056b3;
            }
        </style>
    </head>
    <body>
    
        <div class="login-container">
            <a href="/"> Back to Home </a>
            <h2>Login</h2>
            <form action="submit" method="post">
                <div class="form-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" placeholder="Enter username" required>
                </div>
    
                <div class="form-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" placeholder="Enter password" required>
                </div>
    
                <div class="forgot-password">
                    <a href="#">Forgot Password?</a>
                </div>
    
                <button type="submit" class="login-btn">Login</button>
            </form>
        </div>
    
    </body>
    </html>
    `
}