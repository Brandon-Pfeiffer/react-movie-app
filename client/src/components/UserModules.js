import React from 'react';
import {ReviewModal} from './ReviewModal';
import {ListModal} from './ListModal';
import { ListRender } from './ListRender';
import {ShelfModule} from './ShelfModule'

export const UserModules = (props) => (
  <div>
    <div className='row' style={Style.container}>
      <div className='col s4'>
        <div className='card red lighten-1'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Lists</span>
            {props.lists.map((result, index)=>(
              <ListRender
                key={result.id}
                title={result.title}
                body={result.body}
              />
            ))}
            <input href='#listModal' className='modal-trigger' type="button" onClick={() => props.listModalTrigger()} />
          </div>
        </div>
      </div>

      <ShelfModule
        shelf={props.shelf}
      />

      <div className='col s4'>
        <div className='card red lighten-1'>
          <div className='card-content'>
            <span className='card-title' style={Style.titles}>Reviews</span>
            <input href='#reviewModal' className='modal-trigger' type="button" onClick={() => props.reviewModalTrigger()} />
          </div>
        </div>
      </div>
    </div>
    <ReviewModal reviewValue={props.reviewValue}
                 reviewName={props.reviewName}
                 reviewBool={props.reviewBool}
                 handleReviewSubmit={props.handleReviewSubmit}
                 handleEventChange={props.handleEventChange}/>

    <ListModal listValue={props.listValue}
               listName={props.listName}
               listBool={props.listBool}
               handleListSubmit={props.handleListSubmit}
               handleEventChange={props.handleEventChange}/>
  </div>
)

const Style = {
  titles: {
      textAlign: "center",
      color: "white"
  }
}