import { useForm } from "react-hook-form"
import { sendEmail } from "@/utils/send-email"

export type FormData = {
  name: string
  email: string
  phone: string
  message: string
}

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>()

  function onSubmit(data: FormData) {
    sendEmail(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-6">
        <input
          type="text"
          placeholder="nome"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("name", { required: true })}
        />
      </div>
      <div className="mb-6">
        <input
          type="email"
          placeholder="Email"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("email", { required: true })}
        />
      </div>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Telefone"
          className="w-full rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          {...register("phone", { required: false })}
        />
      </div>
      <div className="mb-6">
        <textarea
          rows={6}
          placeholder="Mensagem"
          className="w-full resize-none rounded border border-stroke px-[14px] py-3 text-base text-body-color outline-none focus:border-primary dark:border-dark-3 dark:bg-dark dark:text-dark-6"
          defaultValue=""
          {...register("message", { required: false })}
        />
      </div>
      <div>
        <button
          type="submit"
          className="w-full rounded bg-violet-700 p-3 text-white transition hover:bg-opacity-90"
        >
          Enviar Mensagem
        </button>
      </div>
    </form>
  )
}
