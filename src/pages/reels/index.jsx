// import React, { useState, useEffect, useRef } from 'react';
// import Modal from 'react-modal';
// import "./sass/styles.css";

// //videos reels
// import compiladoBrava from "../../assets/imagens/videos/depoimentos/compilado-brava.mp4"

// //svg
// import fecharModal from "../../assets/imagens/svg/fechar-modal.svg"
// import arrowEsquerda from "../../assets/imagens/svg/left-arrow.svg"
// import arrowDireita from "../../assets/imagens/svg/right-arrow.svg"

// const videos = [
//   {
//     video: {
//       horizontal: compiladoBrava,
//       vertical: compiladoBrava,
//     },
//   },
// ];

// Modal.setAppElement('#root');

// const VideoPlayer = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
//   const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
//   const [currentTime, setCurrentTime] = useState(0);
//   const videoRef = useRef(null);
//   const modalVideoRef = useRef(null);

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth <= 768);
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const openModal = () => {
//     if (videoRef.current) {
//       setCurrentTime(videoRef.current.currentTime);
//       videoRef.current.pause();
//     }
//     setIsModalOpen(true);
//   };

//   const closeModal = () => {
//     setIsModalOpen(false);
//     if (videoRef.current) {
//       videoRef.current.currentTime = currentTime;
//       videoRef.current.play();
//     }
//   };

//   const handleModalTimeUpdate = () => {
//     if (modalVideoRef.current) {
//       setCurrentTime(modalVideoRef.current.currentTime);
//     }
//   };

//   const handleNextVideo = () => {
//     if (currentVideoIndex < videos.length - 1) {
//       setCurrentVideoIndex(currentVideoIndex + 1);
//     }
//   };

//   const handlePrevVideo = () => {
//     if (currentVideoIndex > 0) {
//       setCurrentVideoIndex(currentVideoIndex - 1);
//     }
//   };

//   const currentVideo = videos[currentVideoIndex];
//   const videoSrc = isMobile ? currentVideo.video.vertical : currentVideo.video.horizontal;

//   const handleVideoEnd = () => {
//     if (currentVideoIndex < videos.length - 1) {
//       setCurrentVideoIndex(currentVideoIndex + 1);
//     } else {
//       setCurrentVideoIndex(0);
//     }
//   };

//   return (
//     <>
//       {!isModalOpen && (
//         <div className="video-fixed">
//           <video
//             src={videoSrc}
//             muted
//             autoPlay
//             loop
//             ref={videoRef}
//             onClick={openModal}
//           />
//         </div>
//       )}

//       <Modal
//         isOpen={isModalOpen}
//         onRequestClose={closeModal}
//         contentLabel="Vídeo Modal"
//         className="modal"
//         overlayClassName="modal-overlay"
//       >

//         {videos.length > 1 && (
//           <div className="modal-controls">
//             {currentVideoIndex > 0 && (
//               <button className="prev-button" onClick={handlePrevVideo}><img src={arrowEsquerda} alt="" /></button>
//             )}

//             {currentVideoIndex < videos.length - 1 && (
//               <button className="next-button" onClick={handleNextVideo}><img src={arrowDireita} alt="" /></button>
//             )}
//           </div>
//         )}

//         <div className={"container-modal"}>
//           <video
//             src={videoSrc}
//             controls
//             autoPlay
//             ref={modalVideoRef}
//             onTimeUpdate={handleModalTimeUpdate}
//             onEnded={handleVideoEnd}
//             className="modal-video"
//           />

//           <button className="close" onClick={closeModal}><img src={fecharModal} alt="" /></button>

//         </div>
//       </Modal>
//     </>
//   );
// };

// export default VideoPlayer;
