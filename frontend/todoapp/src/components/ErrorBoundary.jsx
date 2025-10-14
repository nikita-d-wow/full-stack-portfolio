import React, { Component } from 'react';
export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can log error to a monitoring service here
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-red-100 rounded-3xl shadow-lg text-center">
          <h2 className="text-2xl font-bold mb-4 text-red-700">
            Oops! Something went wrong.
          </h2>
          <p className="mb-4 text-gray-800">{this.state.error?.message}</p>
          <button
            onClick={this.handleReset}
            className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
          >
            Try Again
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}
