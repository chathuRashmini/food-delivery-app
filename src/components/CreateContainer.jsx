import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'

import { useStateValue } from '../context/StateProvider'
import { getAllItems, saveItem } from '../utils/firebaseFuncitons'
import { actionType } from '../context/reducer'
import { storage } from '../firebase.config'
import { categories } from '../utils/data'
import Loader from './Loader'

const CreateContainer = () => {

    const [title, settitle] = useState('')
    const [calories, setcalories] = useState('')
    const [price, setprice] = useState('')
    const [category, setcategory] = useState(null)
    const [fields, setfields] = useState(false)
    const [alertStatus, setalertStatus] = useState('danger')
    const [msg, setmsg] = useState(null)
    const [isLoading, setisLoading] = useState(false)
    const [imageAsset, setimageAsset] = useState(null)
    const [{}, dispatch] = useStateValue()

    const uploadImage = (e) => {
        setisLoading(true)
        const imageFile = e.target.files[0]
        const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
        const uplaodTask = uploadBytesResumable(storageRef, imageFile)

        uplaodTask.on(
            'state_changed', 
            (snapshot) => {
                const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
                return uploadProgress
            }, 
            (error) => {
                console.log(error)
                setfields(true)
                setmsg('Error while uploading.')
                setalertStatus('danger')

                setTimeout(() => {
                    setfields(false)
                    setisLoading(false)
                }, 4000);
            }, 
            () => {
                getDownloadURL(uplaodTask.snapshot.ref).then(downloadURL => {
                    setimageAsset(downloadURL)
                    setisLoading(false)
                    setfields(true)
                    setmsg('Image uploaded successfully!')
                    setalertStatus('success')

                    setTimeout(() => {
                        setfields(false)
                    }, 4000);
                })
            }
        )
    }

    const deleteImage = () => {
        setisLoading(true)
        const deleteRef = ref(storage, imageAsset)
        deleteObject(deleteRef).then(() => {
            setimageAsset(null)
            setisLoading(false)
            setfields(true)
            setmsg('Image deleted successfully.')
            setalertStatus('success')
            setTimeout(() => {
                setfields(false)
            }, 4000);
        })
    }

    const saveDetails = () => {
        setisLoading(true)
        try {
            if (!title || !calories || !imageAsset || !category || !price) {
                setfields(true)
                setmsg('Required fields cannot be empty')
                setalertStatus('danger')
    
                setTimeout(() => {
                    setfields(false)
                    setisLoading(false)
                }, 4000);
            } else {
                const data = {
                    id: `${Date.now()}`,
                    title,
                    imageURL: imageAsset,
                    category,
                    calories,
                    qty: 1,
                    price
                }
                saveItem(data)
                setisLoading(false)
                setfields(true)
                setmsg('Data uploaded successfully!')
                setalertStatus('success')
                clearData()

                setTimeout(() => {
                    setfields(false)
                }, 4000);
            }
        } catch (error) {
            console.log(error)
            setfields(true)
            setmsg('Error while uploading.')
            setalertStatus('danger')

            setTimeout(() => {
                setfields(false)
                setisLoading(false)
            }, 4000);
        }

        fetchData()
    }

    const clearData = () => {
        settitle('')
        setcalories('')
        setprice('')
        setcategory('Select category')
        setimageAsset(null)
    }

    const fetchData = async () => {
        await getAllItems().then(data => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data
            })
        })
    }

    return (
        <div className='w-full h-auto flex items-center justify-center min-h-screen'>
            <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">
                { fields && (
                    <motion.p 
                        className={`w-full p-2 rounded-lg text-center font-semibold text-lg ${alertStatus === 'danger' ? 'bg-red-400 text-red-800' : 'bg-emerald-400 text-emerald-800'}`}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {msg}
                    </motion.p>
                )}

                <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                    <MdFastfood className='text-xl text-gray-700' />
                    <input 
                        type="text" 
                        required 
                        value={title} 
                        placeholder='Give me a title' 
                        className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-400 text-textColor" 
                        onChange={(e) => settitle(e.target.value)}
                    />
                </div>

                <div className="w-full">
                    <select className="outline-none w-full border-b-2 border-gray-200 p-2 rounded-md cursor-pointer" onChange={(e) => setcategory(e.target.value)}>
                        <option value="other" className="bg-white text-lighttextGray">Select A Category</option>
                        { categories && categories.map((item, index) => (
                            <option 
                                key={index} 
                                className='border-0 outline-none capitalize bg-white text-lighttextGray'
                                value={item.urlParamName}
                            >
                                {item.name}
                            </option>
                        ))}
                    </select>
                </div>

                <div className="group flex justify-center items-center flex-col border-2 border-dotted w-full h-225 md:h-420 cursor-pointer rounded-md">
                    { isLoading ? <Loader /> : (
                        <>
                            { !imageAsset ? (
                                <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                                    <div className="w-full h-full flex flex-col items-center justify-center gap-2">
                                        <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                                        <p className="text-gray-500 hover:text-gray-700 tracking-wider">Click to uplaod</p>
                                    </div>

                                    <input type="file" name='upload image' accept='image/*' onChange={uploadImage} className="w-0 h-0" />
                                </label> 
                            ) : (
                                <div className='relative h-full'>
                                    <img src={imageAsset} alt="uplaoded image" className="w-full h-full object-cover" />
                                    <button 
                                        type='button' 
                                        className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out'
                                        onClick={deleteImage}
                                    >
                                        <MdDelete className='text-white' />
                                    </button>
                                </div>
                            )}
                        </>
                    )}
                </div>

                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdFoodBank className='text-gray-600 text-2xl' />
                        <input 
                            type="text" 
                            className="w-full h-full font-semibold text-textColor text-lg bg-transparent outline-none border-none placeholder:text-gray-400" 
                            required
                            placeholder='Calories'
                            value={calories}
                            onChange={(e) => setcalories(e.target.value)}
                        />
                    </div>
                </div>

                <div className="w-full flex flex-col md:flex-row items-center gap-3">
                    <div className="w-full py-2 border-b border-gray-300 flex items-center gap-2">
                        <MdAttachMoney className='text-gray-600 text-2xl' />
                        <input 
                            type="text" 
                            className="w-full h-full font-semibold text-textColor text-lg bg-transparent outline-none border-none placeholder:text-gray-400" 
                            required
                            placeholder='Price'
                            value={price}
                            onChange={(e) => setprice(e.target.value)}
                        />
                    </div>
                </div>

                <div className="flex items-center w-full">
                    <button 
                        className="ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-white font-semibold"
                        type='button'
                        onClick={saveDetails}
                    >
                        Save Details
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CreateContainer