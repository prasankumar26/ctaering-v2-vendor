export const datavalidationerror = (error) => {
    if (error && error.response && error.response.data && error.response.data.data_validation_errors && error.response.data.data_validation_errors.length > 0) {
        return error.response.data.data_validation_errors[0].msg;
    } else {
        return "Data validation error occurred."; 
    }
}

export const successToast = (response) => {
    if (response && response.data && response.data.message) {
        return response?.data?.message;
    } else {
        return "Success message not available.";
    }
}
