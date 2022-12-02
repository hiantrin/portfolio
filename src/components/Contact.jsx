import React from 'react'
import { useRef } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faMessage } from '@fortawesome/free-solid-svg-icons';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import emailjs from '@emailjs/browser';
import swal from 'sweetalert';



const Contact = () => {
	const [errors, setErrors] = useState({})
    const myRef = useRef();
	const infos = {
		from_name: "",
		email : "",
		message: "",
	}
	const [userInfos, setUserInfos] = useState(infos);
	const [show, setShow] = useState(false);
	const [myElement, setMyElement] = useState(false);

	
	const validate = () => {
		const error = {};
		const regex = /^([a-zA-Z._0-9-]+)@([a-zA-Z0-9]+[.]?)*([a-zA-Z0-9])(\.[a-zA-Z]{2,4})$/i;
		if (!userInfos.from_name)
			error.from_name = "Name is required!"
		if (!userInfos.email)
			error.email = "Email is required!"
		else if (!regex.test(userInfos.email) )
			error.email = "This is not a valid email format!"
		if (!userInfos.message)
			error.message = "Please write your message"
		if (Object.keys(error).length === 0) {
			return false;
		}
		return(error);
	}

	const sendEmail = (e) => {
		e.preventDefault();
		const error = validate()
		if (error) setErrors(error)
		else
		{
			setErrors({})
			sendIt();
		}
	  };

	
	  const sendIt = () => {
			setUserInfos(infos);
			emailjs.send('service_1kds15t', 'template_rsxe4ek', {
				...userInfos
			}, 'bVMA5Waewx2Axvt2W')
			.then((result) => {
				swal({
					title: "Yeeeeeeeeep!!",
					text: "Your message has been sent succefully",
					icon: "success",
					buttons: "close"
				})
			}, (error) => {
				swal({
					title: "Ooooooops!!",
					text: "Something Went Wrong Please Try Again!",
					icon: "warning",
					buttons: "close"
				})
			});
	  }
	

	useEffect(() => {
		const handleScroll = () => {
			if ( (myRef.current.offsetTop + 200) <= (window.pageYOffset + window.innerHeight))
				setMyElement(true);
		}
		document.addEventListener('scroll',handleScroll);
		return () => {
		  document.removeEventListener('scroll',handleScroll);
		}
	}, [myRef])


  return (
	<>
	<div id="Contact" ref={myRef} className={!myElement ? "opacity-0 " : 'flex w-full flex-col items-center  reveal pb-10 mb-16'}>
		<div className="flex w-full flex-col items-center bg-black z-30 pt-28 ">
			<h1 className='text-xs sm:text-lg text-sky-500 text-mono font-mono mb-6'>04. <span className='text-gray-300 text-sm  sm:text-xl  font-bold'>What's next</span></h1>
			<h1 className='text-3xl sm:text-5xl text-gray-300  font-bold mb-8'>Get In Touch</h1>
			<div className='flex text-center w-full px-6 sm:px-0 sm:w-[600px]'>
				<h1 className='text-sm sm:text-lg text-gray-500 mb-14'>I’m always looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, you are welcome, i will get back to you!</h1>
			</div>
			<button className='sm:p-4 text-sm sm:text-lg font-mono border-[1px] mb-20 space-x-4' onClick={() => setShow(!show)}>
				<h1>Say hello</h1>
				<FontAwesomeIcon icon={!show ? faAngleDown : faAngleUp} className="text-2xl"/>
			</button>
		</div>
        <form className={show ? "flex flex-col items-center sm:items-start space-y-6 w-full sm:w-[600px] animate-message px-2 sm:px-0" : "flex flex-col space-y-6 w-full sm:w-[600px] animate-message2 px-2 sm:px-0"}  onSubmit={sendEmail}>
        	<div className="flex flex-col sm:flex-row space-y-6 sm:space-y-0 justify-between w-full ">
				<div className='flex flex-col w-full sm:w-[47%]'>
					<div className="flex items-center space-x-4 px-4 py-2 border-2 border-sky-500 rounded-full w-full ">
						<FontAwesomeIcon icon={faUser} className="text-white"/>
						<input type="text" name="Name" placeholder='YOUR NAME' className='my-input' value={userInfos.from_name} onChange={(e) => setUserInfos({...userInfos, from_name: e.target.value})} />
					</div>
					<h1 className='text-sm text-red-600 ml-4 mt-1'>{errors.from_name}</h1>
				</div>
				<div className='flex flex-col w-full sm:w-[47%]'>
					<div className="flex items-center space-x-4 px-4 py-2 border-2 border-sky-500 rounded-full w-full ">
						<FontAwesomeIcon icon={faEnvelope} className="text-white"/>
						<input type="text" name="Email" placeholder='YOUR EMAIL' className='my-input' value={userInfos.email} onChange={(e) => setUserInfos({...userInfos, email: e.target.value})} />
					</div>
					<h1 className='text-sm text-red-600 ml-4 mt-1'>{errors.email}</h1>
				</div>
        	</div>
			<div className='flex flex-col w-full'>
				<div className="w-full h-28 flex space-x-4 px-4 py-2 border-2 border-sky-500 rounded-2xl overflow-y-hidden">
					<FontAwesomeIcon icon={faMessage} className="text-white mt-1"/>
					<textarea name="Email" placeholder='YOUR MESSAGE' className='my-input' value={userInfos.message} onChange={(e) => setUserInfos({...userInfos, message: e.target.value})}/>
				</div>
				<h1 className='text-sm text-red-600 ml-4 mt-1'>{errors.message}</h1>
			</div>
			
			<button className="w-max flex space-x-3 px-10 rounded-full text-white" type='submit'>
				<FontAwesomeIcon icon={faPaperPlane} />
				<h1 >SEND MESSAGE</h1>
			</button>
        </form>
    </div>
	</>
    
  )
}

export default Contact