import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Box } from 'native-base';
import ScreenHeader from '../../components/organisms/screen-header';
import { Translate } from '../../share';
import LanguageProvider from '../../share/context/Language';



const TransferPointPage = () => {
    const { language } = useContext(LanguageProvider.context);

    return (
        <Box flex={1}>
            <ScreenHeader
                hasBackButton={true}
                title={Translate[language].registerMembership}
                bgColor="primary.500"
            />
        </Box>
    )
}
export default TransferPointPage;