'use client';

export default function Modals() {
  return (
    <>
      {/* Login Modal */}
      <div className="modal fade login-register-form" id="login-register-form" tabIndex={-1} aria-labelledby="loginRegisterModal" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="login-register-tabs">
                <ul className="nav nav-tabs" id="loginRegisterTabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button className="modal-toggle-1 nav-link active" id="login-tab" data-bs-toggle="tab" data-bs-target="#login-form-tab" type="button" role="tab" aria-controls="login-form-tab" aria-selected="true">Login</button>
                  </li>
                </ul>    
              </div>
              <button type="button" className="btn close ms-auto" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="tab-content" id="loginRegisterTabContent">
                <div className="tab-pane fade show active login-form-tab" id="login-form-tab" role="tabpanel" aria-labelledby="login-tab">
                  <div id="hz-login-messages" className="hz-social-messages"></div>
                  <form id="houzez_login_form" method="post">
                    <div className="login-form-wrap">
                      <div className="form-group">
                        <div className="form-group-field username-field">
                          <input type="text" className="form-control" name="username" placeholder="Username or Email" />
                        </div>
                      </div>
                      <div className="form-group">
                        <div className="form-group-field password-field">
                          <input type="password" className="form-control" name="password" autoComplete="on" placeholder="Password" />
                        </div>
                      </div>
                    </div>
                    <div className="form-tools">
                      <div className="d-flex">
                        <label className="control control--checkbox flex-grow-1">
                          <input type="checkbox" name="remember" />Remember me
                          <span className="control__indicator"></span>
                        </label>
                        <a href="#" data-bs-toggle="modal" data-bs-target="#reset-password-form" data-bs-dismiss="modal">Lost your password?</a>
                      </div>
                    </div>
                    <input type="hidden" name="houzez_login_security" value="2f52261ca4" />
                    <input type="hidden" name="_wp_http_referer" value="/" />
                    <input type="hidden" name="action" id="login_action" value="houzez_login" />
                    <input type="hidden" name="redirect_to" value="https://avinellcantagali.com?login=success" />
                    <button id="houzez-login-btn" type="submit" className="btn btn-primary btn-login w-100">
                      <span className="houzez-loader-js houzez-hidden spinner-border spinner-border-sm" aria-hidden="true"></span> Login        
                    </button>
                  </form>
                </div>
                <div className="tab-pane fade register-form-tab" id="register-form-tab" role="tabpanel" aria-labelledby="register-tab">
                  <div id="hz-register-messages" className="hz-social-messages"></div>
                  User registration is disabled for demo purpose.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reset Password Modal */}
      <div className="modal fade reset-password-form" id="reset-password-form" tabIndex={-1} role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <div className="modal-title fw-normal">Forgot Password</div>
              <button type="button" className="btn close ms-auto" data-bs-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">
              <div id="reset_pass_msg"></div>
              <p>Please enter your username or email address. You will receive a link to create a new password via email.</p>
              <form id="houzez_forgot_password_form" onSubmit={(e) => e.preventDefault()}>
                <div className="form-group mb-3">
                  <input type="text" className="form-control forgot-password" name="user_login" id="user_login" placeholder="Enter your username or email address" />
                </div>
                <input type="hidden" name="fave_resetpassword_security" value="8b619f5914" />
                <input type="hidden" name="_wp_http_referer" value="/" />
                <button type="submit" id="houzez_forgetpass" className="btn-reset-password btn btn-primary w-100">
                  <span className="houzez-loader-js houzez-hidden spinner-border spinner-border-sm" aria-hidden="true"></span> Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
