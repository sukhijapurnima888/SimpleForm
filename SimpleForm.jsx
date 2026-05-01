import { useState } from "react";

function SimpleForm() {
  const [form, setForm] = useState({
  name: "",
  email: "",
  age: "",
  phone: "",
  password: "",
  confirmPassword: ""
});


  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

 const validate = () => {
  let err = {};

  if (!form.name) err.name = "Name is required";

  if (!form.email) err.email = "Email is required";
  else if (!form.email.includes("@"))
    err.email = "Invalid email";

  if (!form.age) err.age = "Age is required";
  else if (isNaN(form.age))
    err.age = "Age must be a number";
  else if (form.age < 17)
    err.age = "Minimum age is 17";

  if (!form.phone) err.phone = "Phone is required";
  else if (form.phone.length !== 10)
    err.phone = "Phone must be 10 digits";

  if (!form.password) err.password = "Password required";
  else if (form.password.length < 6)
    err.password = "Min 6 characters";

  if (form.confirmPassword !== form.password)
    err.confirmPassword = "Passwords do not match";

  return err;
};

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate();
    setErrors(err);

    if (Object.keys(err).length === 0) {
      setSubmitted(true);
    }
  };

return (
  <div className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-indigo-200 via-purple-200 to-pink-200">
    
    <div className="bg-white w-[400px] p-8 rounded-3xl shadow-2xl">
      
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-700">
         Registration Form
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">

        {/* Name */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border outline-none 
            ${errors.name ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border outline-none 
            ${errors.email ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>

        {/* Age */}
        <div>
          <input
            type="text"
            name="age"
            placeholder="Age (17+)"
            value={form.age}
            onChange={handleChange}
            className={`w-full p-3 rounded-lg border outline-none 
            ${errors.age ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
          />
          {errors.age && (
            <p className="text-red-500 text-sm mt-1">{errors.age}</p>
          )}
        </div>
        {/* phone */}
        <div>
          <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border 
              ${errors.phone ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
            )}
          </div>
        {/* password */}
        <div>
      <input
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        className={`w-full p-3 rounded-lg border 
        ${errors.password ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
      />
      {errors.password && (
        <p className="text-red-500 text-sm mt-1">{errors.password}</p>
      )}
    </div>
    {/* confirm password */}
    <div>
    <input
      type="password"
      name="confirmPassword"
      placeholder="Confirm Password"
      value={form.confirmPassword}
      onChange={handleChange}
      className={`w-full p-3 rounded-lg border 
      ${errors.confirmPassword ? "border-red-500" : "border-gray-300 focus:border-indigo-500"}`}
    />
    {errors.confirmPassword && (
      <p className="text-red-500 text-sm mt-1">
        {errors.confirmPassword}
      </p>
    )}
  </div>


        <button className="w-full bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700">
          Submit
        </button>
      </form>

      {/* Live Preview */}
      <div className="mt-5 p-3 bg-gray-100 rounded-lg text-sm">
        <p><b>Name:</b> {form.name || "-"}</p>
        <p><b>Email:</b> {form.email || "-"}</p>
        <p><b>Age:</b> {form.age || "-"}</p>
        <p><b>Phone:</b> {form.phone || "-"}</p>
      </div>

      {submitted && (
        <p className="text-green-600 mt-3 text-center font-medium">
          ✅ Form submitted successfully!
        </p>
      )}
    </div>

  </div>
);
}

export default SimpleForm;