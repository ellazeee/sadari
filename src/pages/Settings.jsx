import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import { SettingsSide } from "../components/settings/settings-side";
import { FormEditProfile } from "../components/settings/form-edit-profile";
import { FormChangePassword } from "../components/settings/form-change-password";

export const Settings = () => {
  const [selectedForm, setSelectedForm] = useState("editProfile");

  // Dummy data profil
  const dummyProfile = {
    name: "Elvira",
    email: "elvira@gmail.com",
    phone: "08123456789",
  };

  const renderForm = () => {
    switch (selectedForm) {
      case "editProfile":
        return <FormEditProfile profile={dummyProfile} />;
      case "changePassword":
        return <FormChangePassword />;
      default:
        return <FormEditProfile profile={dummyProfile} />;
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row justify-center mt-10 mb-10 gap-16">
        <SettingsSide onSelect={setSelectedForm} />
        {renderForm()}
      </div>
    </div>
  );
};
