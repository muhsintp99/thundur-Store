const NavBarStyle = (theme) => ({
    AppBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        padding: {xs: '0px',md: '8px 30px 0px 30px'},
        position: 'sticky',
        top: 0,
        height: '30px',
        width: '100%',
    },
    Toolbar: {
        '&.MuiToolbar-root': {
            backgroundColor: '#3a506b',
            minHeight: '53px',
            borderRadius: {xs: '0px',md: '8px'},
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
        }
    },
});

export default NavBarStyle;
