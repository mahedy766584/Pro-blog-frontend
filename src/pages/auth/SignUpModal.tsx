import ProBlogButton from "@/components/common/button/ProBlogButton";
import ProBlogForm from "@/components/form/ProBlogForm";
import ProBlogInput from "@/components/form/ProBlogInput";
import ProBlogProfileInput from "@/components/form/ProBlogProfileInput";
import ProBlogTextarea from "@/components/form/ProBlogTextarea";
import { useAddNewUserMutation } from "@/redux/features/user/userManagement.api";
import { modalWidth } from "@/styles/modalWidth";
import { Col, Modal, Row } from "antd";
import { Fragment } from "react";
import type { FieldValues, SubmitHandler } from "react-hook-form";

type TSignUpModalProps = {
    openSignup: boolean;
    setOpenSignup: React.Dispatch<React.SetStateAction<boolean>>;
    handleBackToLogin: () => void;
};

const SignUpModal = ({ setOpenSignup, openSignup, handleBackToLogin }: TSignUpModalProps) => {

    const [addNewUser] = useAddNewUserMutation();

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        const formData = new FormData();

        const userData = {
            name: data.name,
            email: data.email,
            password: data.password,
            userName: data.userName,
            bio: data.bio
        };

        formData.append("data", JSON.stringify(userData));

        formData.append("file", data?.profileImage);

        console.log(data)

        addNewUser(formData);
    };


    return (
        <Fragment>
            {/* Responsive */}
            <Modal
                title={<p className="text-center py-5 mb-7!">Welcome <span className="text-main font-bold text-xl!">Pro Blog.</span></p>}
                centered
                open={openSignup}
                onCancel={() => setOpenSignup(false)}
                width={modalWidth}
                footer={null}
            >
                <div className="flex mx-auto! flex-col justify-center items-center">
                    <div className="w-full!">
                        <ProBlogForm onSubmit={onSubmit}>
                            <Row gutter={15}>
                                <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                                    <ProBlogInput
                                        type="text"
                                        name="name.firstName"
                                        label="First Name"
                                    />
                                </Col>
                                <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                                    <ProBlogInput
                                        type="text"
                                        name="name.lastName"
                                        label="Last Name"
                                    />
                                </Col>
                                <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                                    <ProBlogInput
                                        type="text"
                                        name="email"
                                        label="Email"
                                    />
                                </Col>
                                <Col span={24} lg={{ span: 12 }} md={{ span: 12 }}>
                                    <ProBlogInput
                                        type="password"
                                        name="password"
                                        label="Password"
                                    />
                                </Col>
                                <Col span={24}>
                                    <ProBlogInput
                                        type="text"
                                        name="userName"
                                        label="User Name"
                                    />
                                </Col>
                                <Col span={24}>
                                    <ProBlogTextarea
                                        name="bio"
                                        label="Bio"
                                        placeholder="Write something about yourself..."
                                        rules={{ required: "Bio is required" }}
                                        rows={3}
                                    />
                                </Col>
                                <Col span={24}>
                                    <ProBlogProfileInput
                                        name="profileImage"
                                        label="Profile Picture"
                                    />
                                </Col>
                            </Row>
                            <ProBlogButton htmlType="submit" shape="round" className="w-full! mt-6!" color="default" variant="solid">
                                Sign up
                            </ProBlogButton>
                        </ProBlogForm>
                    </div>
                </div>
                <div className="text-center px-12! mt-10! space-y-5! text-sec!">
                    <p>
                        Already have an account?{" "}
                        <button
                            onClick={handleBackToLogin}
                            className="text-main font-medium hover:underline"
                        >
                            Sign up
                        </button>
                    </p>
                    <p>
                        By joining <span className="font-medium text-main!">Pro Blog</span>, you confirm that you have read and agree to our{" "}
                        <a href="#" className="underline! hover:text-main!">Terms of Service</a> and <a href="#" className="underline! hover:text-main!">Privacy Policy</a>.
                    </p>
                </div>
            </Modal>
        </Fragment>
    );
};

export default SignUpModal;