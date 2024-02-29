import { useState } from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import mdFoto from './assets/md.jpg'
import mdCurriculo from './assets/md-curriculo.pdf'
import { sendMessage } from './services'
import { toast } from 'react-toastify'

const THREE_SECONDS = 3000

function App () {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [message, setMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  const handleSendMessage = async () => {
    console.log('Enviando mensagem:', message)
    try {
      await sendMessage(message)
      setMessage('')
      toast.success('Mensagem enviada com sucesso!')
      setTimeout(() => {
        setIsModalOpen(false)
      }, THREE_SECONDS)
    } catch (error) {
      console.error(error)
      toast.error('Erro ao enviar mensagem!')
    }
  }

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="bg-gray-700 p-4 rounded-lg shadow-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl mx-auto overflow-hidden">
        <div className="flex flex-col items-center">
          <img
            className="mb-4 w-24 h-24 sm:w-32 sm:h-32 rounded-full shadow-lg"
            src={mdFoto}
            alt="Perfil"
          />
          <h2 className="text-xl font-medium text-white">Márcio Daniel</h2>
          <br />
          <p className="text-gray-300 text-justify">
            Sou um desenvolvedor com três anos de experiência, especializado em
            back-end, atuando principalmente em projetos de processamento de
            pagamentos, marketplaces e geoprocessamento.
          </p>
          <br/>
          <p className="text-gray-300 text-justify">
            Possuo habilidades avançadas em JavaScript, TypeScript, Node.js,
            Express.js e MongoDB, além de conhecimento em Docker, Nest.js,
            MySQL, PostgreSQL e Redis.
          </p>
          <br />
          <p className="text-gray-300 text-justify">
            No que diz respeito à AWS, tenho experiência com serviços como SNS,
            SQS, AWS Lambda e S3 Bucket.
          </p>
          <br />
          <p className="text-gray-300 text-justify">
            Em relação ao front-end, estou familiarizado com React, Redux, Redux
            Toll Kit, React Router Dom entre outras bibliotecas.
          </p>
          <br />
          <p className="text-gray-300 text-justify">
            Atualmente, estou me dedicando ao estudo de Arquitetura Limpa,
            Hexagonal e DDD por meio de cursos e leituras.
          </p>
          <br />
          <p className="text-gray-300 text-justify">
            Além da minha carreira, contribuo com a comunidade como Engenheiro
            de Software voluntário na ONG Palavra de Paz e como Instrutor de
            Programação voluntário na ONG Programadores do Amanhã.
          </p>
          <div className="mt-4 flex gap-4 w-full justify-center items-center p-2">
            <a
              href={mdCurriculo}
              download="Márcio Daniel - Currículo.pdf"
              className="inline-block bg-cyan-800 text-white py-2 px-4 rounded hover:bg-cyan-900 text-sm transition ease-in-out duration-150 text-center leading-normal"
            >
              Baixar meu Currículo
            </a>

            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-cyan-800 text-white py-2 px-4 rounded hover:bg-cyan-900 text-sm transition ease-in-out duration-150"
            >
              Enviar uma mensagem
            </button>
          </div>

          <div className="mt-4 flex gap-4 bg-white w-full justify-center items-center p-2 rounded">
            <a
              href="https://www.linkedin.com/in/marciodanielll/"
              className="text-blue-700 hover:text-blue-500 flex items-center gap-2"
            >
              <FaLinkedin /> LinkedIn
            </a>
            <a
              href="https://github.com/marciodanielll"
              className="text-gray-500 hover:text-gray-400 flex items-center gap-2"
            >
              <FaGithub /> GitHub
            </a>
            <a
              href="#"
              className="text-red-600 hover:text-red-400 flex items-center gap-2"
            >
              <FaYoutube /> YouTube
            </a>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-900 flex justify-center items-center">
          <div className="bg-white p-8 md:p-12 rounded shadow-lg relative w-5/6 sm:w-4/6 md:w-3/6 lg:w-2/6 xl:w-1/6 max-h-full mx-auto my-6 bg-gray-900">
            <textarea
              className="w-full h-60 rounded focus:outline-none "
              placeholder="Sua mensagem"
              value={message}
              onChange={handleChange}
            ></textarea>
            <div className="flex justify-around items-center mt-4">
              <button
                onClick={handleSendMessage}
                className="bg-cyan-800 text-white p-2 rounded hover:bg-cyan-900 text-center"
              >
                Enviar
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-red-500 text-white p-2 rounded hover:bg-red-400 text-center"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default App
