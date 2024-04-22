import { useRef, useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setCredentials } from "./authSlice";
import { useLoginMutation } from "./authApiSlice";
import "../../css/login.css";
import usePersist from "../../hooks/usePersist";

import React from "react";

export default function Login() {
  const customerRef = useRef();
  const errRef = useRef();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [persist, setPersist] = usePersist();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [login, { isLoading }] = useLoginMutation();

  useEffect(() => {
    customerRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [email, password]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { accessToken } = await login({ email, password }).unwrap();
      dispatch(setCredentials({ accessToken }));
      setEmail("");
      setPassword("");
      navigate('/dash');

      /* navigate(`/dash?accessToken=${accessToken}`); */
      
    } catch (err) {
      if (!err.status) {
        setErrMsg("No Server Response");
      } else if (err.status === 400) {
        setErrMsg("Missing Email or Password");
      } else if (err.status === 401) {
        setErrMsg("Unauthorized");
      } else {
        setErrMsg(err.data?.message);
      }
      errRef.current.focus();
    }
  };

  const handleCustomerInput = (e) => setEmail(e.target.value);
  const handlePwdInput = (e) => setPassword(e.target.value);
  const handleToggle = () => setPersist(prev => !prev);

  const errClass = errMsg ? "errmsg" : "offscreen";

  if (isLoading) return <p>Loading...</p>;

  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="login__title | my-5 display-5 fw-bold ls-tight">
                The best offer <br />
                <span>for your fashion</span>
              </h1>
              <p className="login__text | mb-4 opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              ></div>

              <div className="card bg-glass ">
                <div className="card-body px-4 py-5 px-md-5">
                  <h1 className="h2 text-center mb-3">Welcome</h1>
                  <form onSubmit={handleSubmit}>
                    <div className="row d-flex flex-column gy-3">
                      <div className="col mb-4">
                        <div data-mdb-input-init className="form-outline p-3">
                          <input
                            type="text"
                            id="email"
                            ref={customerRef}
                            value={email}
                            onChange={handleCustomerInput}
                            autoComplete="off"
                            required
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="email">
                            Email
                          </label>
                        </div>
                      </div>
                      <hr />
                      <div className="col mb-4">
                        <div data-mdb-input-init className="form-outline p-3">
                          <input
                            type="password"
                            id="password"
                            onChange={handlePwdInput}
                            value={password}
                            required
                            className="form-control"
                          />
                          <label className="form-label" htmlFor="email">
                            Password
                          </label>
                        </div>
                      </div>
                    </div>

                    <button
                      type="submit"
                      data-mdb-button-init
                      data-mdb-ripple-init
                      className="btn btn-primary btn-block mb-4"
                    >
                      Log In
                    </button>

                    
                    <label htmlFor="persist" className="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="persist" onChange={handleToggle} checked={persist} />
                        Trust This Device
                    </label>
                  

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

/* const content = (
        <section className="public">
            <header>
                <h1>Employee Login</h1>
            </header>
            <main className="login">
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="email"
                        ref={customerRef}
                        value={email}
                        onChange={handleCustomerInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                    <button className="form__submit-button">Sign In</button>
                </form>
            </main>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </section>
    )

    return content */

/* const Login = () => {
    const customerRef = useRef()
    const errRef = useRef()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [errMsg, setErrMsg] = useState('')

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [login, { isLoading }] = useLoginMutation()

    useEffect(() => {
        customerRef.current.focus()
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [email, password])


    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            const { accessToken } = await login({ email, password }).unwrap()
            dispatch(setCredentials({ accessToken }))
            setEmail('')
            setPassword('')
            navigate('/dash')
        } catch (err) {
            if (!err.status) {
                setErrMsg('No Server Response');
            } else if (err.status === 400) {
                setErrMsg('Missing Email or Password');
            } else if (err.status === 401) {
                setErrMsg('Unauthorized');
            } else {
                setErrMsg(err.data?.message);
            }
            errRef.current.focus();
        }
    }

    const handleCustomerInput = (e) => setEmail(e.target.value)
    const handlePwdInput = (e) => setPassword(e.target.value)

    const errClass = errMsg ? "errmsg" : "offscreen"

    if (isLoading) return <p>Loading...</p>

    const content = (
        <section className="public">
            <header>
                <h1>Employee Login</h1>
            </header>
            <main className="login">
                <p ref={errRef} className={errClass} aria-live="assertive">{errMsg}</p>

                <form className="form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input
                        className="form__input"
                        type="text"
                        id="email"
                        ref={customerRef}
                        value={email}
                        onChange={handleCustomerInput}
                        autoComplete="off"
                        required
                    />

                    <label htmlFor="password">Password:</label>
                    <input
                        className="form__input"
                        type="password"
                        id="password"
                        onChange={handlePwdInput}
                        value={password}
                        required
                    />
                    <button className="form__submit-button">Sign In</button>
                </form>
            </main>
            <footer>
                <Link to="/">Back to Home</Link>
            </footer>
        </section>
    )

    return content
}
export default Login */
