import { useState } from "react";
import {Form, Avatar, Button, Upload, Row, Col, Card, Space} from "antd";
import {router} from "next/client";
import {link} from "fs";
import { useRouter } from 'next/navigation'

export  const UserBusinessProfileContent = () => {
    const [form] = Form.useForm();

    const router = useRouter()
    const handleFinish = () => {
        router.push('profile-edit')
    };

    return (
        <div className="flex justify-center w-full mt-10 flex-col items-center mb-6">
            <div className="w-10/12 bg-green-50 h-32 rounded-2xl flex flex-row justify-between p-6 mb-[-40px]">
                <p className={"text-white  text-2xl"}>My Profile</p>
                <Button>Upload Photo</Button>
            </div>
            <div className="w-9/12 shadow-[5px_5px_5px_rgba(0,0,0,0.15)] p-6 flex-row flex justify-evenly bg-white rounded-xl" >

                <Col>
                    <Avatar style={{backgroundColor:'#609734'}} src={'/person-1.png'} className="size-24" size={"large"}/>
                </Col>
                <Col>
                    <div className="flex gap-3.5 flex-col">
                        <Card size="default"  style={{ width: 300}}>
                            <p className="font-bold text-gray-500 mt-1">Name</p>
                            <p>Sid</p>
                            <p className="font-bold text-gray-500 mt-1">Email</p>
                            <p>siddxd@growthx.com</p>
                            <p className="font-bold text-gray-500 mt-1">Phone Number</p>
                            <p> +91 49652845732</p>
                            <p className="font-bold text-gray-500 mt-1"> NIC Number</p>
                            <p>2001323435363</p>
                        </Card>
                        <Card size="default"  style={{ width: 300}}>
                            <p className="font-bold text-xl text-black mt-1">Description</p>
                            <p> Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo
                                diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo
                                diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur. </p>

                        </Card>
                        <div className="text-center">
                            <Button type="primary" className="bg-green-50 w-full rounded-lg hover:!bg-green-600" onClick={handleFinish}>
                                Edit Details
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col>
                    <div className="flex gap-3.5 flex-col">
                        <Card size="default"  style={{ width: 450}}>
                            <p className="font-bold text-xl text-black mb-1">Service Information</p>
                            <p> Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo
                                diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>

                        </Card>
                        <Card size="default"  style={{ width: 450}}>
                            <p className="font-bold text-xl text-black mb-1">Website</p>
                            <p> Lorem ipsum dolor sit amet consectetur. Erat auctor a aliquam vel congue luctus. Leo
                                diam cras neque mauris ac arcu elit ipsum dolor sit amet consectetur.</p>

                        </Card>
                        <Card size="default"  style={{ width: 400}}>
                            <div className="mapouter">
                                <div className="gmap_canvas">
                                    <iframe
                                        className="gmap_iframe"
                                        frameBorder="0"
                                        scrolling="no"
                                        marginHeight={0}
                                        marginWidth={0}
                                        src="https://maps.google.com/maps?width=350&height=215&hl=en&q=university of colombo school of computing&t=&z=13&ie=UTF8&iwloc=B&output=embed"
                                        width="350"
                                        height="215"
                                        title="Google Map"
                                    ></iframe>
                                </div>
                                <style jsx>{`
                                .mapouter {
                                  position: relative;
                                  text-align: right;
                                  width: 350px;
                                  height: 215px;
                                }
                                .gmap_canvas {
                                  overflow: hidden;
                                  background: none !important;
                                  width: 350px;
                                  height: 215px;
                                }
                                .gmap_iframe {
                                  width: 350px !important;
                                  height: 215px !important;
                                }
                              `}</style>
                            </div>

                        </Card>
                    </div>
                </Col>
            </div>
        </div>
    );
}