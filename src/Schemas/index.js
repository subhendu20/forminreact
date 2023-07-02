import * as yup from 'yup'

export const formSchema = yup.object({
          name:yup.string().min(3,'Minimum length 3').max(30,'Maximum length 30').required('name is required'),
          address:yup.string().min(10,'Minimum length 10').max(200,'Maximum length 200').required('Address is required'),
          country:yup.string().required('select your country'),
         

})