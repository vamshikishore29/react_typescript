import React, { useRef } from 'react'


const InputRef:React.FC = () => {
    const textRef = useRef<HTMLInputElement >(null)
    const onSubmit=(e:React.FormEvent)=>{
        e.preventDefault()
        console.log(textRef.current!.value)
        textRef.current!.value=" "
        textRef.current!.style.backgroundColor="red"
    }

  return (
    <form  onSubmit={onSubmit} >
      <input type="text"  ref={textRef} />
      <button type="submit" className='btn btn-primar' > Add </button>
    </form>
  )
}

export default InputRef
