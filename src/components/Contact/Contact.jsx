import React, { Fragment, Component } from 'react';


export default class Contact extends Component {
    constructor(){
        super();
        this.state = {
            contant : {}
        }
    };

     ResetDefault (e) {
        if (e.target.value === 'Message...') {
            e.target.value = ''
        }
    }

    SubmitHandler (e){
        e.preventDefault();
        console.log('Submitting Contact Form')
    }
    

    render() {
      return (
          <Fragment>
              <div className='box box-body'>

                  <div className='box-header'>
                      <h3 className='box-title'> <strong> <i className='fa fa-envelope'> </i> Contact</strong></h3>
                  </div>


                  <div className='box-footer'>
                      <form className='form-horizontal' onSubmit={e => SubmitHandler(e)}>
                          <div className='form-group'>

                              <input
                                  type='text'
                                  className='form-control'
                                  name='names'
                                  placeholder='Names'
                              />
                          </div>

                          <div className='form-group'>

                              <input
                                  type='text'
                                  className='form-control'
                                  name='surname'
                                  placeholder='Surname'
                              />
                          </div>

                          <div className='form-group'>
                              <input
                                  type='text'
                                  className='form-control'
                                  name='cell'
                                  placeholder='Cell'

                              />
                          </div>

                          <div className='form-group'>
                              <input
                                  type='email'
                                  className='form-control'
                                  name='email'
                                  placeholder='Email'
                              />
                          </div>

                          <div className='form-group'>
                              <input
                                  type='text'
                                  className='form-control'
                                  name='subject'
                                  placeholder='Subject'
                              />
                          </div>

                          <div className='form-group'>

                              <textarea
                                  name='message'
                                  placeholder='Message...'
                                  className='form-control'
                              ></textarea>
                          </div>

                          <div className='form-group'>
                              <button className='btn btn-success btn-block btn-lg'><strong> <i className='fa fa-send'> </i> Send Message</strong></button>
                          </div>

                      </form>

                  </div>

              </div>

          </Fragment>

      )
  }
}





