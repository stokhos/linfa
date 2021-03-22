(function() {var implementors = {};
implementors["linfa"] = [{"text":"impl&lt;F&gt; Unpin for PearsonCorrelation&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;R, L&gt; Unpin for MultiTargetModel&lt;R, L&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for Pr","synthetic":true,"types":[]},{"text":"impl&lt;R, T&gt; Unpin for DatasetBase&lt;R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;L, P&gt; Unpin for CountedTargets&lt;L, P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;P: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for ConfusionMatrix&lt;A&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for ReceiverOperatingCharacteristic","synthetic":true,"types":[]}];
implementors["linfa_bayes"] = [{"text":"impl Unpin for BayesError","synthetic":true,"types":[]},{"text":"impl Unpin for GaussianNbParams","synthetic":true,"types":[]}];
implementors["linfa_clustering"] = [{"text":"impl Unpin for AppxDbscan","synthetic":true,"types":[]},{"text":"impl Unpin for AppxDbscanLabeler","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for AppxDbscanHyperParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for AppxDbscanHyperParamsBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for Dbscan","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for DbscanHyperParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for DbscanHyperParamsBuilder&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for GaussianMixtureModel&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for GmmError","synthetic":true,"types":[]},{"text":"impl Unpin for GmmCovarType","synthetic":true,"types":[]},{"text":"impl Unpin for GmmInitMethod","synthetic":true,"types":[]},{"text":"impl&lt;F, R&gt; Unpin for GmmHyperParams&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for KMeans&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for KMeansError","synthetic":true,"types":[]},{"text":"impl&lt;F, R&gt; Unpin for KMeansHyperParams&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, R&gt; Unpin for KMeansHyperParamsBuilder&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_elasticnet"] = [{"text":"impl Unpin for Error","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for ElasticNetParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for ElasticNet&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_hierarchical"] = [{"text":"impl&lt;T&gt; Unpin for HierarchicalCluster&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_ica"] = [{"text":"impl Unpin for FastIcaError","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for FastIca&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for FittedFastIca&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for GFunc","synthetic":true,"types":[]}];
implementors["linfa_kernel"] = [{"text":"impl&lt;K1, K2&gt; Unpin for KernelInner&lt;K1, K2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K1: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;K2: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for KernelType","synthetic":true,"types":[]},{"text":"impl&lt;K1, K2&gt; Unpin for KernelBase&lt;K1, K2&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;K1: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;K2: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;K1 as Inner&gt;::Elem: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for KernelMethod&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for KernelParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_linear"] = [{"text":"impl Unpin for LinearError","synthetic":true,"types":[]},{"text":"impl Unpin for Link","synthetic":true,"types":[]},{"text":"impl Unpin for TweedieRegressor","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for FittedTweedieRegressor&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for LinearRegression","synthetic":true,"types":[]},{"text":"impl&lt;A&gt; Unpin for FittedLinearRegression&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_logistic"] = [{"text":"impl&lt;F&gt; Unpin for LogisticRegression&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, C&gt; Unpin for FittedLogisticRegression&lt;F, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_pls"] = [{"text":"impl Unpin for PlsError","synthetic":true,"types":[]},{"text":"impl Unpin for PlsSvdParams","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsSvd&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsRegressionParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsRegression&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsCanonicalParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsCanonical&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsCcaParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for PlsCca&lt;F&gt;","synthetic":true,"types":[]}];
implementors["linfa_reduction"] = [{"text":"impl&lt;F&gt; Unpin for DiffusionMap&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl Unpin for DiffusionMapParams","synthetic":true,"types":[]},{"text":"impl Unpin for PcaParams","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for Pca&lt;F&gt;","synthetic":true,"types":[]}];
implementors["linfa_svm"] = [{"text":"impl Unpin for SvmResult","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for SolverParams&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F&gt; Unpin for SeparatingHyperplane&lt;F&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, F, K&gt; Unpin for SolverState&lt;'a, F, K&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, T&gt; Unpin for SvmParams&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for ExitReason","synthetic":true,"types":[]},{"text":"impl&lt;F, T&gt; Unpin for Svm&lt;F, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
implementors["linfa_trees"] = [{"text":"impl&lt;F, L&gt; Unpin for TreeNode&lt;F, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;F, L&gt; Unpin for DecisionTree&lt;F, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Unpin for SplitQuality","synthetic":true,"types":[]},{"text":"impl&lt;F, L&gt; Unpin for DecisionTreeParams&lt;F, L&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;L: Unpin,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;'a, F, L&gt; Unpin for NodeIter&lt;'a, F, L&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a, F, L&gt; Unpin for Tikz&lt;'a, F, L&gt;","synthetic":true,"types":[]}];
implementors["linfa_tsne"] = [{"text":"impl Unpin for TSneError","synthetic":true,"types":[]},{"text":"impl&lt;F, R&gt; Unpin for TSne&lt;F, R&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: Unpin,<br>&nbsp;&nbsp;&nbsp;&nbsp;R: Unpin,&nbsp;</span>","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()