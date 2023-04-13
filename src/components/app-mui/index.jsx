
import {Container } from '@mui/material'
import CssBaseline from '@mui/material/CssBaseline';
import GlobalStyles from '@mui/material/GlobalStyles';
import { AppHeader } from '../app-header';
import { PostList } from '../post-list';
import { postData } from '../../postData';

const titleGlobalStyles = <GlobalStyles styles={{ h1: { color: 'grey' } }} />



export const AppMui = () => {
    return (
        <>
            <CssBaseline />
            <Container>
                <AppHeader/>
                <PostList posts={postData}/>
            </Container>
        </>
    )

}
