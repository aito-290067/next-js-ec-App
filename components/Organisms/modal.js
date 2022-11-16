import Modal from "react-modal"
import { useState } from "react"


const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,0.3)"
  },

  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    width: '500px',
    height: '300px',
    transform: 'translate(-50%, -50%)'
  }
};

// アプリのルートを識別するクエリセレクタを指定する。
Modal.setAppElement('#__next')

const ModalWindow = () => {
  const [modalOpen, SetModalOpen] = useState(false)

  // モーダルを開く処理
  const openModal = () => {
    SetModalOpen(true)
  }

  const afterOpenModal = () => {
    // モーダルが開いた後の処理
  }

  // モーダルを閉じる処理
  const closeModal = () => {
    SetModalOpen(false)
  }

  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      <Modal
        // isOpenがtrueならモダールが起動する
        isOpen={modalOpen}
        // モーダルが開いた後の処理を定義
        onAfterOpen={afterOpenModal}
        // モーダルを閉じる処理を定義
        onRequestClose={closeModal}
        // スタイリングを定義
        style={customStyles}
      >

        <h2 className="">ログインしました。</h2>
        <button type="button" onClick={closeModal} className="bg-gray-200 border ">close</button>
      </Modal>
    </>
  )
}

export default ModalWindow
