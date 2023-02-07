import { channelTypes } from '../../@types/reducers';
import { initialState, request, success, failure } from '../rootReducer';

export const channelSettingsUpdateReducer = (state: channelTypes.ChannelSettingsUpdateState = initialState, action: channelTypes.ChannelSettingsUpdateAction): channelTypes.ChannelSettingsUpdateState => {
	switch (action.type) {
		case channelTypes.actionTypes.CHANNEL_SETTINGS_UPDATE_REQUEST:
			return {
				...state,
				request: action.request,
				...request()
			};
		case channelTypes.actionTypes.CHANNEL_SETTINGS_UPDATE_SUCCESS:
			return {
				...state,
				...success(),
				data: action.data
			};
		case channelTypes.actionTypes.CHANNEL_SETTINGS_UPDATE_FAILURE:
			return {
				...state,
				...failure(),
				data: action.data
			};
	}
	return state;
};
