import React from "react";
import FormKoleksi from "../components/formKoleksi-page/FormKoleksi";
import NavigationBarLog from "../components/homepage/navigationBarLog";

const FormKoleksiPage = () => {
    return (
        <div className="container-fluid">
            <NavigationBarLog />
            <FormKoleksi />
        </div>
    )
}

export default FormKoleksiPage;