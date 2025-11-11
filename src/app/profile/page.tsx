"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import { useRouter } from "next/navigation";
import * as Yup from "yup";

const ProfileSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Enter a valid 10-digit number")
    .required("Phone number is required"),
  address: Yup.string().required("Address is required"),
  locality: Yup.string().required("Preferred locality is required"),
  budget: Yup.number()
    .typeError("Budget must be a number")
    .required("Budget is required"),
});

export default function ProfilePage() {
  const router = useRouter();
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-white"
      suppressHydrationWarning
    >
      <div className="w-full max-w-md bg-red-50 p-6 rounded-xl shadow-sm">
        <h1 className="text-2xl font-semibold text-red-600 mb-6 text-center">
          Complete Your Prime-Estates Profile
        </h1>

        <Formik
          initialValues={{
            fullName: "",
            phone: "",
            address: "",
            locality: "",
            budget: "",
          }}
          validationSchema={ProfileSchema}
          onSubmit={(values, { resetForm }) => {
            console.log("Form Data:", values);
            alert("Profile submitted successfully!");
            resetForm();
          }}
        >
          {() => (
            <Form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Full Name
                </label>
                <Field
                  name="fullName"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  placeholder="Enter full name"
                />
                <ErrorMessage
                  name="fullName"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Phone Number
                </label>
                <Field
                  name="phone"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  placeholder="Enter phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <Field
                  name="address"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  placeholder="Enter your address"
                />
                <ErrorMessage
                  name="address"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Preferred Locality
                </label>
                <Field
                  as="select"
                  name="locality"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                >
                  <option value="">Select locality</option>
                  <option value="Andheri">Andheri</option>
                  <option value="Bandra">Bandra</option>
                  <option value="Powai">Powai</option>
                  <option value="Juhu">Juhu</option>
                  <option value="Thane">Thane</option>
                </Field>
                <ErrorMessage
                  name="locality"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Budget (in ₹)
                </label>
                <Field
                  name="budget"
                  className="w-full border border-gray-300 rounded-md p-2 mt-1"
                  placeholder="e.g. 5000000"
                />
                <ErrorMessage
                  name="budget"
                  component="div"
                  className="text-red-500 text-sm"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
              >
                Submit
              </button>

              <button
                type="button"
                onClick={() => router.push("/")}
                className="w-full mt-2 bg-gray-400 text-white py-2 rounded-md hover:bg-gray-500 transition"
              >
                Go Back Home
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
