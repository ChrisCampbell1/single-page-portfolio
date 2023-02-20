const BASE_URL = `${process.env.REACT_APP_BACK_END_SERVER_URL}/api/emails`

const sendEmail = async (form) => {
  try {
    const res = await fetch(`${BASE_URL}`, {
      method: 'POST',
      body:JSON.stringify(form)
    })
    console.log(res)
    return res
  } catch (error) {
    console.log(error)
  }
}

export {
  sendEmail
}
