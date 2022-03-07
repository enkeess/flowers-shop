import { Layout, Title, FormBlock, Checkbox, Summary, SummaryItem} from '../../components';
import {  } from '../../components/form-block/form-block';
import './order-page.scss';

import data from '../../app/data.json';
import { useRef, useState } from 'react';

export const OrderPage = () => {
	const [showPostcardDetails, setShowPostcardDetails] = useState<boolean>(false);
	const toggleShowPostcardDetails = () => setShowPostcardDetails(!showPostcardDetails);

	const [showFullPostcardDetails, setShowFullPostcardDetails] = useState<boolean>(false);
	const toggleShowFullPostcardDetails = () => setShowFullPostcardDetails(!showFullPostcardDetails);

	return(
		<Layout>
			<Title>Оформление заказа</Title>
			<div className='order'>
				<form className='order__form' onSubmit={(e) => {
					e.preventDefault();
					const formData = new FormData(e.target as HTMLFormElement);
					formData.forEach(item => console.log(item));
				}} >
					<div className='form-step first form-step_wide'>
						<h3 className='form-step__title'>1.Контакты получателя</h3>
						<div className='form-step__inputs'>
							<FormBlock title="Имя получателя *"     type="text"/>
							<FormBlock title="Телефон получателя *" type="tel"/>
							<FormBlock title="Регион" type="select" content={data.city}/>
							<FormBlock title="Адрес *"              type="text"/>
							<FormBlock title="Дата доставки"        type="date"/>	
							<FormBlock title="Время доставки" type="select" content={data.periods}/>
						</div>
					</div>

					<div className='form-step second '>
						<h3 className='form-step__title'>2.Контакты отправителя</h3>
						<div className='form-step__inputs'>
							<FormBlock title="Имя отправителя *"     type="text"/>
							<FormBlock title="Телефон Отправителя *" type="tel"/>
							<FormBlock title="Email *"              type="email"/>
						</div>
					</div>

					<div className='form-step third '>
						<h3 className='form-step__title'>3.Детали доставки</h3>
						<div className='form-step__inputs'>
							
							<Checkbox title="Доставка сюрпризом" value='surprice'/>
							<Checkbox title="Фотоотчет (+ 50руб)" value='photo-report'/>
							<Checkbox title="Добавить вазу (+ 249руб)" value='add-vase'/>
							<Checkbox title="Напомнить о событии" value='notification'/>
							<Checkbox title="Открытка" value='postcard' onClick={toggleShowPostcardDetails} />
							
							{
								showPostcardDetails && 
								<div className='hide-block'>
									<Checkbox 
										title="Визитка" 
										value='cutaway' 
										defaultChecked={!showFullPostcardDetails} 
										onClick={toggleShowFullPostcardDetails}
									/>

									<Checkbox 
										title="Полномасштабная открытка (+ 249руб)" 
										value='full-postcard' 
										onClick={toggleShowFullPostcardDetails}
										defaultChecked={showFullPostcardDetails} 
									/>
									{
										showFullPostcardDetails && 

										<div>
											<FormBlock title="Повод для открытки" type="text"/>
											<FormBlock title="Текст открытки" type="text"/>
										</div>
									}
								</div>
							}
							
						</div>
					</div>
					
					<Summary>
						
						<SummaryItem 
							caption='25 желтых тюльпанов'
							counter={2}
							price={5558}
						/>

						<SummaryItem 
							caption='25 розовых пионовидных роз'
							counter={1}
							price={558}
						/>

						<SummaryItem 
							caption='Мечтательница'
							counter={1}
							price={555}
						/>

						

						<SummaryItem 
							caption='Сумма заказа'
							price={5558}
							dark={true}
						/>

						<SummaryItem 
							caption='Доставка'
							price={150}
							dark={true}
						/>

						
						{/* <SummaryItem/> */}
					</Summary>
				</form>

				
			</div>
		</Layout>
	);
};