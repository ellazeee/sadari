import React, { useState } from "react";
import { Navbar } from "../components/navbar/navbar";
import { SettingsSide } from "../components/settings/settings-side";
import { FormEditProfile } from "../components/settings/form-edit-profile";
import { FormChangePassword } from "../components/settings/form-change-password";

export const Settings = () => {
  const [selectedForm, setSelectedForm] = useState("editProfile");

  const renderForm = () => {
    switch (selectedForm) {
      case "editProfile":
        return <FormEditProfile />;
      case "changePassword":
        return <FormChangePassword />;
      default:
        return <FormEditProfile />;
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