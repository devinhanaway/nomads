import swal from 'sweetalert/dist/sweetalert-dev.js'
// import swal from 'sweetalert/dev/sweetalert.es6.js'
import 'sweetalert/dist/sweetalert.css'


const noop = ()=>{}


export default (type, msg, title, done=noop, moreOpts={})=>{

  if ('error' === type) msg = msg.responseText || msg.message || msg

  const opts = {
    title: title || (type.toUpperCase() + '!'),
    text: msg,
    type: type,
  }

  for (let k in moreOpts){
    if (moreOpts.hasOwnProperty(k)) opts[k] = moreOpts[k]
  }

  opts.confirmButtonColor = {
    success: '#A5DC86',
    info: '##C9DAE1',
    warning: '#DD6B55',
    error: '#DD6B55',
  }[type]

  swal(opts, done)

}

export const showInputError = swal.showInputError
