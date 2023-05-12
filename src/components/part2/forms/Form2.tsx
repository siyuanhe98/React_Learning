import { FieldValues, useForm } from 'react-hook-form'
// specify the expected structure of the form data
interface FormData {
  name: string
  age: number
}
const Form2 = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()
  const onSubmit = (data: FieldValues) => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          // React Hook Form supports the standard HTML attributes for data validation
          {...register('name', { required: true, minLength: 3 })}
          id="name"
          type="text"
          className="form-control"
        />
        {errors.name?.type === 'required' && (
          <p className="text-danger">The name field is empty!</p>
        )}
        {errors.name?.type === 'minLength' && (
          <p className="text-danger">
            The name must be more than 3 characters!
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        <input
          {...register('age')}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  )
}

export default Form2
