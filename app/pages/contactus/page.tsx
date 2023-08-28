// 'use client'

// import { useEffect,useState,useRef } from "react";
// import '../contactus/style.css';
// import emailjs from "@emailjs/browser"

// export default function ContactForm() {
// 	const [loading, setLoading] = useState(false);
// 	const [videoSource, setVideoSource] = useState<string>("/contactus.mp4");

// 	useEffect(() => {
// 	  const video = new Image();
// 	  video.src = videoSource;
// 	}, [videoSource]);
  
// // 	const form = useRef();

// //   const sendEmail = (e) => {
// //     e.preventDefault();

// //     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
// //       .then((result) => {
// //           console.log(result.text);
// //       }, (error) => {
// //           console.log(error.text);
// //       });
// //   };
// 	async function handleSubmit(event: any) {
// 		event.preventDefault();
// 		setLoading(true);

// 		const data = {
// 			name: String(event.target.name.value),
// 			email: String(event.target.email.value),
// 			message: String(event.target.message.value),
// 		};

// 		const response = await fetch("/api/contact", {
// 			method: "POST",
// 			headers: {
// 				"Content-Type": "application/json",
// 			},
// 			body: JSON.stringify(data),
// 		});

// 		if (response.ok) {
// 			console.log("Message sent successfully");
// 			setLoading(false);
// 			// reset the form
// 			event.target.name.value = "";
// 			event.target.email.value = "";
// 			event.target.message.value = "";
// 		}
// 		if (!response.ok) {
// 			console.log("Error sending message");
// 			setLoading(false);
// 		}
// 	}
// 	return (
// 		<div className="contact-container">
//       <video autoPlay loop muted playsInline className="background-video">
//         <source src={videoSource} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
		
// 		<form onSubmit={handleSubmit} className="contact mt-[145px] px-[20px] flex flex-col justify-center items-center">

// 			<div className="w-[50vw] flex flex-col my-4">
// 				<label className="font-bold text-gray-800" htmlFor="name">
// 					Name
// 				</label><br/>
// 				<input
// 					type="text"
// 					minLength={3}
// 					maxLength={150}
// 					required
// 					className=" p-4 bg-gray-50 border border-gray-100 "
// 					autoComplete="off"
// 					id="name"
// 				/>
// 			</div>
// 			<div className="w-[50vw] flex flex-col my-4">
// 				<label className="font-bold text-gray-800" htmlFor="email">
// 					Email
// 				</label><br/>
// 				<input
// 					type="email"
// 					minLength={5}
// 					maxLength={150}
// 					required
// 					className=" p-4 bg-gray-50 border border-gray-100 "
// 					autoComplete="off"
// 					id="email"
// 				/>
// 			</div>
// 			<div>
// 				<label className="font-bold text-gray-800" htmlFor="message">
// 					Message
// 				</label><br/><br/>
// 				<textarea
// 					rows={4}
// 					required
// 					minLength={10}
// 					maxLength={500}
// 					name="message"
// 					className="w-[50vw] p-4 bg-gray-50 border border-gray-100 "
// 				/>
// 			</div>
// 			<button
// 				type="submit"
// 				disabled={loading}
// 				className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 flex flex-col justify-center items-center">
// 				Send Message
// 			</button><br/><br/>
// 		</form>

// 	</div>
// 	);
// }


// // <form onSubmit={handleSubmit} className="contact bg-gradient-to-r from-gray-200 to-green-300 mt-[145px] px-[20px] flex flex-col justify-center items-center">
'use client'
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event: any) {
    event.preventDefault();
    setLoading(true);

    const data = {
      name: String(event.target.name.value),
      email: String(event.target.email.value),
      message: String(event.target.message.value),
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      console.log("Message sent successfully");
      setLoading(false);
      // reset the form
      event.target.name.value = "";
      event.target.email.value = "";
      event.target.message.value = "";
    }
    if (!response.ok) {
      console.log("Error sending message");
      setLoading(false);
    }
  }

  return (
    <div className="contact-container" style={{ position: "relative" }}>
      <video autoPlay loop muted playsInline className="background-video">
        <source src="/contactus.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <form
        onSubmit={handleSubmit}
        className="contact mt-[145px] px-[20px] flex flex-col justify-center items-center"
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <div className="w-[50vw] flex flex-col my-4">
          <label className="font-bold text-gray-800" htmlFor="name">
            Name
          </label><br />
          <input
            type="text"
            minLength={3}
            maxLength={150}
            required
            className=" p-4 bg-gray-50 border border-gray-100 "
            autoComplete="off"
            id="name"
          />
        </div>
        <div className="w-[50vw] flex flex-col my-4">
          <label className="font-bold text-gray-800" htmlFor="email">
            Email
          </label><br />
          <input
            type="email"
            minLength={5}
            maxLength={150}
            required
            className=" p-4 bg-gray-50 border border-gray-100 "
            autoComplete="off"
            id="email"
          />
        </div>
        <div>
          <label className="font-bold text-gray-800" htmlFor="message">
            Message
          </label><br /><br />
          <textarea
            rows={4}
            required
            minLength={10}
            maxLength={500}
            name="message"
            className="w-[50vw] p-4 bg-gray-50 border border-gray-100 "
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="px-4 py-2 w-40 bg-gray-700 disabled:bg-gray-400 disabled:text-gray-100 text-white font-medium mt-4 flex flex-col justify-center items-center"
        >
          Send Message
        </button><br /><br />
      </form>
    </div>
  );
}
