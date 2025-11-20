/* eslint-disable @typescript-eslint/no-explicit-any */
import ProBlogForm from "@/components/form/ProBlogForm";
import ProBlogInput from "@/components/form/ProBlogInput";
import { Modal } from "antd";
import { Fragment, useState } from "react";
import type { FieldValues, SubmitHandler } from "react-hook-form";
import SignUpModal from "./SignUpModal";
import { useAppDispatch } from "@/redux/hooks";
import { useLoginMutation } from "@/redux/features/auth/authApi";
import { toast } from "sonner";
import { verifyToken } from "@/utils/verifyToken";
import { setUser } from "@/redux/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { modalWidth } from "@/styles/modalWidth";
import LoginWithGoogle from "@/components/common/button/LoginWithGoogle";
import ProBlogButton from "@/components/common/button/ProBlogButton";

const ModalLogin = () => {
    const [openLogin, setOpenLogin] = useState(false);
    const [openSignup, setOpenSignup] = useState(false);
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const [login] = useLoginMutation();

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        console.log(data);
        const toastId = toast.loading('Loading in..');
        const userInfo = {
            userName: data.userName,
            password: data.password,
        };

        try {
            const res = await login(userInfo).unwrap();
            const user = verifyToken(res.data.accessToken);
            dispatch(setUser({ user: user, token: res.data?.accessToken }))
            toast.success(res?.message, { id: toastId, duration: 2000 })
            console.log(res)
            if (res.success) {
                navigate('/home')
            }

        } catch (err: any) {
            const errorMessage =
                err?.data?.errorSources?.[0]?.message ||
                err?.data?.message ||
                "Something went wrong!";
            toast.error(`${errorMessage}`, { id: toastId, duration: 2000 });
        }

    };

    const defaultValues = {
        userName: "user04",
        password: "User04"
    };

    const handleOpenSignup = () => {
        setOpenLogin(false);
        setOpenSignup(true);
    };

    const handleBackToLogin = () => {
        setOpenSignup(false);
        setOpenLogin(true);
    };

    return (
        <Fragment>
            {/* Main Button */}
            <ProBlogButton onClick={() => setOpenLogin(true)}>
                Get started
            </ProBlogButton>

            {/* 🔹 LOGIN MODAL */}
            <Modal
                title={<p className="text-center text-2xl py-5 mb-7!">Join <span className="text-main font-bold">Pro Blog.</span></p>}
                centered
                open={openLogin}
                onCancel={() => setOpenLogin(false)}
                footer={null}
                width={modalWidth}
            >
                <div className="flex lg:w-[300px] mx-auto! flex-col justify-center items-center">
                    <LoginWithGoogle />
                    <div className="w-full!">
                        <ProBlogForm onSubmit={onSubmit} defaultValues={defaultValues}>
                            <ProBlogInput
                                type="text"
                                name="userName"
                                label="Username"
                                rules={{ required: "Username is required" }}
                            />
                            <ProBlogInput
                                type="password"
                                name="password"
                                label="Password"
                                rules={{ required: "Password is required" }}
                            />
                            <ProBlogButton htmlType="submit" shape="round" className="w-full! mt-6!" color="default" variant="solid">
                                Sign in
                            </ProBlogButton>
                        </ProBlogForm>
                    </div>
                </div>

                <div className="text-center px-12! mt-10! space-y-5! text-sec!">
                    <p>
                        Don’t have an account yet?{" "}
                        <button
                            onClick={handleOpenSignup}
                            className="text-main font-medium cursor-pointer hover:underline"
                        >
                            Sign up
                        </button>{" "}
                        to get started
                    </p>
                    <p>
                        By joining <span className="font-medium text-main!">Pro Blog</span>, you confirm that you have read and agree to our{" "}
                        <a href="#" className="underline! hover:text-main!">Terms of Service</a> and <a href="#" className="underline! hover:text-main!">Privacy Policy</a>.
                    </p>
                </div>
            </Modal>

            {/* 🔹 SIGNUP MODAL */}

            <SignUpModal openSignup={openSignup} setOpenSignup={setOpenSignup} handleBackToLogin={handleBackToLogin} />

        </Fragment>
    );
};

export default ModalLogin;
