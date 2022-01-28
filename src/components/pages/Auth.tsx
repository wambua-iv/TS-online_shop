import { Button as SignInBtn  } from '@mui/material';
import { Button as Btn } from '@material-ui/core';
import { useState } from 'react';
import { useForm } from '../../customHooks';
import { Login, SignUp, Wrapper } from '../../styles/Auth.styles';

const Auth = () => {
    const [isSignUp, setSignUp] = useState(true);
    const [value, setValue] = useForm({
        firstName: "",
        lastName: "",
        password: "",
        confirm_pass: "",
        email: "",
    });

    const handleRegistration = () => null;
    const handleLogin = () => null;
    const handleChange_isSignUp = () => setSignUp(prev => !prev);

    return (
        <Wrapper>
            <h2><span style={{ color: 'yellow', textAlign: 'center', display: 'block' }}>Webby</span></h2>
            {isSignUp ? (
                <SignUp>
                        <span className="sign-title">Sign up</span>
                        <form>
                            <div className="user-names">
                                <input
                                    type="text"
                                    name = "firstName"
                                    placeholder="First Name"
                                    value={value.firstName}
                                    onChange={setValue}
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name"
                                    value={value.lastName}
                                    onChange={setValue}
                                />
                            </div>
                            <input
                                    id='full-length'
                                    name="email"
                                    type="text"
                                    placeholder="Email"
                                    value={value.email}
                                    onChange={setValue}
                                />
                            <div className='passwords'>
                                
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={value.password}
                                    onChange={setValue}
                                // showPassword={makeVisible}
                                />
                                <input
                                    type="password"
                                    name="confirm_pass"
                                    placeholder="Confirm password"
                                    value={value.confirm_pass}
                                    onChange={setValue}
                                />
                            </div>
                        </form>
                        <Btn
                                className="sign-button"
                                onSubmit={handleRegistration} >Sign up</Btn>
                            <span className='small'>Already A Registered User?  <SignInBtn onClick={handleChange_isSignUp}>Sign in</SignInBtn> </span>
                </SignUp>
            ) : (
                <Login>
                        <span className="sign-title">Sign in</span>
                        <form>
                        <input
                            id='full-length'
                            name="email"
                            type="text"
                            placeholder="Email"
                            value={value.email}
                            onChange={setValue}
                                />
                        <input
                             id='full-length'
                            type="password"
                            name="password"
                            placeholder="Password"
                            value={value.password}
                            onChange={setValue}
                            // showPassword={makeVisible}
                            />
                        </form>
                        <Btn
                                className="sign-button"
                                onSubmit={handleLogin}> Sign in</Btn>
                        <span className='small'>Not Yet Registered?   <SignInBtn onClick={handleChange_isSignUp}>Sign up</SignInBtn> </span>

                </Login>
            )
            }
        </Wrapper >
    )
}
export default Auth;

