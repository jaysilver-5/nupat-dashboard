import React from 'react';
import Member from '../assets/member.png';
import User from '../assets/User.svg';
import { TbUsers } from 'react-icons/tb';
import { MdSplitscreen } from 'react-icons/md';
import { BsLightningCharge } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';
import CardImage from '../assets/Image.png';
import Chat from '../assets/Chat.svg';
import Links from '../assets/Links.svg';
import CardImage2 from '../assets/Image2.png';
import CardImage3 from '../assets/Image3.png';

export default function Screen() {
  return (
    <div className='mx-[64px] flex-grow my-[64px]'>
        <div className=''>
            <div className='flex items-center justify-between'>
                    <div className='text-black'>
                        <div className='font-semibold font-primary text-[38px]'>New Campaign Run</div>
                        <div className='font-primary font-normal text-[15px] text-[#B8B9BD]'>A new campaign launch work for brand new feature in May month</div>
                    </div>
                    <button className='w-[160px] bg-black flex p-2 rounded-[8px]'>
                        <h1 className='m-auto text-white'>
                            ADD MEMBERS
                        </h1>
                    </button>
            </div>
            <div className='flex bg-white mt-[57px] justify-between'>
                <div className='flex'>
                    <div className='flex'>
                        <img src={Member} className='rounded-[50%] border border-white-600 w-[32px]' alt='' />
                        <img src={Member} className='relative -left-2 rounded-[50%] w-[32px] border border-white border-2' alt='' />
                        <img src={Member} className='relative -left-4 rounded-[50%] w-[32px] border border-white border-2' alt='' />
                    </div>
                </div>

                <div className='flex gap-x-[21px]'>
                    <div className='flex font-medium text-[#808080] items-center'>
                        <TbUsers className='' src={User}/>
                        <h1 className='text-[]'>Participants View</h1>
                    </div>
                    
                    <div className='flex font-medium text-[#808080] items-center'>
                        <MdSplitscreen className='rotate-90'/>
                        <h1 className='text-[]'>Board View</h1>
                    </div>
                    
                    <div className='flex font-medium text-[#808080] items-center'>
                        <AiOutlineUnorderedList className=''/>
                        <h1 className='text-[]'>List View</h1>
                    </div>

                    <div className='flex font-medium text-[#808080] items-center'>
                        <BsLightningCharge className=''/>
                        <h1 className='text-[]'>Project View</h1>
                    </div>

                    <div className='flex font-bold text-[#808080] items-center'>
                        <AiOutlinePlus className=''/>
                    </div>
                </div>
            </div>

            <div className='w-full pt-[54px] gap-x-8 flex justify-between mt-4 flex-grow bg-[#FCFBFC]'>
                {/* one */}
                <div>
                    <div className='flex flex-1 items-center'>
                        <div className='flex p-[16px] min-w-[267px] h-[51px] max-w-[480px] rounded-[8px] flex-1 bg-[#F4F6F8] text-[#808080] items-center justify-between'>
                            <h1>To Do</h1>
                            <div className='bg-black flex items-center rounded-[4px] h-[35px] w-[35px]'>
                                <h1 className='text-white m-auto'>3</h1>
                            </div>
                        </div>
                    </div>
                    {/* Container */}
                    <div className='p-[24px] mt-4 rounded-[12px] bg-white'>
                        <img clasName='h-[168px]' src={CardImage}/>
                        <h1 className='font-semibold mt-[18px] font-primary text-[16px]'>Highfidelity Design</h1>
                        <p className='font-primary mt-[8px] text-[14px] text-[#B8B9BD]'>Make clear design and color</p>
                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] text-[14px] flex items-center'>
                                <AiOutlineUnorderedList />
                                <p>Progress</p>
                            </div>

                            <p className='font-primary font-semibold'>2/10</p>
                        </div>

                        
                        <div className='bg-[#ebebeb] rounded-[24px] w-ful'>
                            <div className='h-[8px] rounded-[24px] bg-[#EBEBEB] w-full'>
                            </div>
                        </div>

                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] gap-x-2 text-[14px] flex items-center'>
                                <div className='flex'>
                                    <img src={Chat} />
                                    <p>7</p>
                                </div>

                                <div className='flex'>
                                    <img src={Links} />
                                    <p>2</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex'>
                                    <img src={Member} className='rounded-[50%] border w-[32px] border-white-600' alt='' />
                                    <img src={Member} className='relative -left-2 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                    <img src={Member} className='relative -left-4 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                </div>
                            </div>
                        </div>
        
                    </div>

                    <div className='p-[24px] rounded-[12px] mt-[16px] bg-white'>
                        <h1 className='font-semibold font-primary text-[16px]'>Highfidelity Design</h1>
                        <p className='font-primary mt-[4px] text-[14px] text-[#B8B9BD]'>Make clear design and color</p>
                        <div className='mt-[12px] flex justify-between'>
                            <div className='text-[#B8B9BD] text-[14px] flex items-center'>
                                <AiOutlineUnorderedList />
                                <p>Progress</p>
                            </div>

                            <p className='font-primary font-semibold'>2/10</p>
                        </div>

                        
                        <div className='bg-[#ebebeb] rounded-[24px] w-ful'>
                            <div className='h-[8px] rounded-[24px] bg-[#EBEBEB] w-full'>
                            </div>
                        </div>

                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] gap-x-2 text-[14px] flex items-center'>
                                <div className='flex'>
                                    <img src={Chat} />
                                    <p>7</p>
                                </div>

                                <div className='flex'>
                                    <img src={Links} />
                                    <p>2</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex'>
                                    <img src={Member} className='rounded-[50%] border w-[32px] border-white-600' alt='' />
                                    <img src={Member} className='relative -left-2 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                    <img src={Member} className='relative -left-4 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button className='flex mt-4 rounded-[12px] border border-dashed border-[#D5D5D5] border-2 bg-[#F2F4F5] p-2 w-full items-center m-auto'>
                        <div className='flex text-[#7D8088] m-auto items-center gap-x-4'>
                            <AiOutlinePlus />
                            Add Task
                        </div>
                    </button>
                </div>
                {/* two */}
                <div>
                    <div className='flex flex-1 items-center'>
                        <div className='flex p-[16px] min-w-[267px] h-[51px] max-w-[480px] rounded-[8px] flex-1 bg-[#F4F6F8] text-[#808080] items-center justify-between'>
                            <h1>Inprogress</h1>
                            <div className='bg-black flex items-center rounded-[4px] h-[35px] w-[35px]'>
                                <h1 className='text-white m-auto'>1</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-[24px] rounded-[12px] mt-4 bg-white'>
                        <img clasName='h-[168px]' src={CardImage2}/>
                        <h1 className='font-semibold mt-[18px] font-primary text-[16px]'>Highfidelity Design</h1>
                        <p className='font-primary mt-[8px] text-[14px] text-[#B8B9BD]'>Make clear design and color</p>
                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] text-[14px] flex items-center'>
                                <AiOutlineUnorderedList />
                                <p>Progress</p>
                            </div>

                            <p className='font-primary font-semibold'>2/10</p>
                        </div>

                        
                        <div className='bg-[#ebebeb] rounded-[24px] w-ful'>
                            <div className='h-[8px] w-[45%] rounded-[24px] bg-[#FF5F37] w-full'>
                            </div>
                        </div>

                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] gap-x-2 text-[14px] flex items-center'>
                                <div className='flex'>
                                    <img src={Chat} />
                                    <p>7</p>
                                </div>

                                <div className='flex'>
                                    <img src={Links} />
                                    <p>2</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex'>
                                    <img src={Member} className='rounded-[50%] w-[32px] border border-white-600' alt='' />
                                    <img src={Member} className='relative -left-2 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                    <img src={Member} className='relative -left-4 w-[32px] rounded-[50%] border border-white border-2' alt='' />
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    <button className='flex mt-4 rounded-[12px] border border-dashed border-[#D5D5D5] border-2 bg-[#F2F4F5] p-2 w-full items-center m-auto'>
                        <div className='flex text-[#7D8088] m-auto items-center gap-x-4'>
                            <AiOutlinePlus />
                            Add Task
                        </div>
                    </button>
                </div>
                {/* three */}
                <div>
                    <div className='flex flex-1 items-center pb-5'>
                        <div className='flex p-[16px] min-w-[267px] h-[51px] max-w-[480px] rounded-[8px] flex-1 bg-[#F4F6F8] text-[#808080] items-center justify-between'>
                            <h1>Completed</h1>
                            <div className='bg-black flex items-center rounded-[4px] h-[35px] w-[35px]'>
                                <h1 className='text-white m-auto'>2</h1>
                            </div>
                        </div>
                    </div>
                    <div className='p-[16px] rounded-[12px] bg-white'>
                        <h1 className='font-semibold font-primary text-[16px]'>Highfidelity Design</h1>
                        <p className='font-primary mt-[4px] text-[14px] text-[#B8B9BD]'>Make clear design and color</p>
                        <div className='mt-[30px] flex justify-between'>
                            <div className='text-[#B8B9BD] text-[14px] flex items-center'>
                                <AiOutlineUnorderedList />
                                <p>Progress</p>
                            </div>

                            <p className='font-primary font-semibold'>2/10</p>
                        </div>

                        
                        <div className='bg-[#ebebeb] rounded-[24px] w-ful'>
                            <div className='h-[8px] w-[80%] rounded-[24px] bg-[#8BC488] w-full'>
                            </div>
                        </div>

                        <div className='mt-[10px] flex justify-between'>
                            <div className='text-[#B8B9BD] gap-x-2 text-[14px] flex items-center'>
                                <div className='flex'>
                                    <img src={Chat} />
                                    <p>7</p>
                                </div>

                                <div className='flex'>
                                    <img src={Links} />
                                    <p>2</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex'>
                                    <img src={Member} className='rounded-[50%] w-[32px] border border-white-600' alt='' />
                                    <img src={Member} className='relative w-[32px] -left-2 rounded-[50%] border border-white border-2' alt='' />
                                    <img src={Member} className='relative w-[32px] -left-4 rounded-[50%] border border-white border-2' alt='' />
                                </div>
                            </div>
                        </div>
                        
                    </div>

                    <div className='p-[24px]  rounded-[12px] mt-4 bg-white'>
                        <img clasName='h-[168px]' src={CardImage3}/>
                        <h1 className='font-semibold mt-[18px] font-primary text-[16px]'>Highfidelity Design</h1>
                        <p className='font-primary mt-[8px] text-[14px] text-[#B8B9BD]'>Make clear design and color</p>
                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] text-[14px] flex items-center'>
                                <AiOutlineUnorderedList />
                                <p>Progress</p>
                            </div>

                            <p className='font-primary font-semibold'>2/10</p>
                        </div>

                        
                        <div className='bg-[#ebebeb] rounded-[24px] w-ful'>
                            <div className='h-[8px] w-[80%] rounded-[24px] bg-[#EBEBEB] w-full'>
                            </div>
                        </div>

                        <div className='mt-[21px] flex justify-between'>
                            <div className='text-[#B8B9BD] gap-x-2 text-[14px] flex items-center'>
                                <div className='flex'>
                                    <img src={Chat} />
                                    <p>7</p>
                                </div>

                                <div className='flex'>
                                    <img src={Links} />
                                    <p>2</p>
                                </div>
                            </div>

                            <div className='flex'>
                                <div className='flex'>
                                    <img src={Member} className='rounded-[50%] w-[32px] border border-white-600' alt='' />
                                    <img src={Member} className='relative w-[32px] -left-2 rounded-[50%] border border-white border-2' alt='' />
                                    <img src={Member} className='relative w-[32px] -left-4 rounded-[50%] border border-white border-2' alt='' />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className='flex mt-4 rounded-[12px] border border-dashed border-[#D5D5D5] border-2 bg-[#F2F4F5] p-2 w-full items-center m-auto'>
                        <div className='flex text-[#7D8088] m-auto items-center gap-x-4'>
                            <AiOutlinePlus />
                            Add Task
                        </div>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
