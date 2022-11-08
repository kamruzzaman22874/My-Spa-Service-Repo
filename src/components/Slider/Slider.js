import React from 'react';
import './Slider.css'

const Slider = () => {
    return (
			<div className='flex justify-center mt-5 mb-5'>
				<div className='carousel lg:w-[50%] h-[400px] rounded-lg'>
					<div id='slide1' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://www.massagemag.com/wordpress/wp-content/uploads/Article-SpaServices-MM.png'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide4' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide2' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide2' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://www.mega-search.net/wp-content/uploads/spa-services.jpg'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide1' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide3' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide3' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://www.betterteam.com/images/spa-therapist-job-description-6000x4000-20201117.jpeg?crop=40:21,smart&width=1200&dpr=2'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide2' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide4' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
					<div id='slide4' className='carousel-item relative w-full'>
						<img
							alt=''
							src='https://miro.medium.com/max/640/1*5LfGY92yi94CMMlq-DSuuw.jpeg'
							className='w-full'
						/>
						<div className='absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2'>
							<a href='#slide3' className='btn btn-circle'>
								❮
							</a>
							<a href='#slide1' className='btn btn-circle'>
								❯
							</a>
						</div>
					</div>
				</div>
			</div>
		);
};

export default Slider;