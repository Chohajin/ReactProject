import React from 'react'

export default function C20241118UstStateB() {
    const[name, setName] = useState("");
    const onChangeName = (e) => {
    setName(e.target.value);
  }

  const[birth, setBirth] = useState("");
  const onChangeBirth = (e) => {
    setBirth(e.target.value);
  }

  const[gender, setGender] = useState("");
  const onChangeGender = (e) => {
    setGender(e.target.value);
  }

  return (
    <>
    <input value={name}
    paceholder="입력하세요!"
    onChange={onChangeName}
    type="text" />
    <div>{name}s</div>
    </>
  )
}
