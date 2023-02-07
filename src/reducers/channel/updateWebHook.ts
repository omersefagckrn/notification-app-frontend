import { channelTypes } from '../../@types/reducers';
import { initialState, request, success, failure } from '../rootReducer';

export const updateWebHookReducer = (state: channelTypes.UpdateWebHooksState = initialState, action: channelTypes.UpdateWebHooksAction): channelTypes.UpdateWebHooksState => {
	switch (action.type) {
		case channelTypes.actionTypes.CHANNEL_WEBHOOKS_UPDATE_REQUEST:
			return {
				...state,
				request: action.request,
				...request()
			};
		case channelTypes.actionTypes.CHANNEL_WEBHOOKS_UPDATE_SUCCESS:
			return {
				...state,
				...success(),
				data: action.data
			};
		case channelTypes.actionTypes.CHANNEL_WEBHOOKS_UPDATE_FAILURE:
			return {
				...state,
				...failure(),
				data: action.data
			};
	}
	return state;
};