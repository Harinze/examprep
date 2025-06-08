import { type Question } from "./kcna-questions";

export const questions: Question[] = [
  {
    id: 1,
    question: "Which GitOps tool continuously monitors Git repositories and syncs changes to a Kubernetes cluster?",
    options: ["Helm", "Kustomize", "Argo CD", "Prometheus"],
    correctAnswer: "C",
    explanation: `Argo CD is a GitOps continuous delivery tool that automatically applies changes from Git to Kubernetes.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 2,
    question: "What is the core principle of GitOps?",
    options: ["Manual updates", "Container logging", "Infrastructure as Code stored in Git", "Running builds inside Kubernetes"],
    correctAnswer: "C",
    explanation: `GitOps relies on Git as the source of truth for Kubernetes manifests and uses automation to sync desired state.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 3,
    question: "In GitOps, what triggers a change in the Kubernetes environment?",
    options: ["Manual apply", "Git commit or merge", "Docker image update", "Node reboot"],
    correctAnswer: "B",
    explanation: `GitOps tools detect changes in Git repositories (commits or merges) and apply them to the cluster.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 4,
    question: "Which Kubernetes object is used to isolate workloads and apply RBAC rules?",
    options: ["Deployment", "Node", "Namespace", "ServiceAccount"],
    correctAnswer: "C",
    explanation: `Namespaces logically separate resources in a cluster and help apply RBAC and resource quotas.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Namespaces"
  },
  {
    id: 5,
    question: "How can you list all namespaces in a cluster?",
    options: ["kubectl list namespaces", "kubectl get ns", "kubectl get pods -n", "kubectl get cluster-namespaces"],
    correctAnswer: "B",
    explanation: "`kubectl get ns` or `kubectl get namespaces` shows all the namespaces in the cluster.",
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Namespaces"
  },
  {
    id: 6,
    question: "What does the Horizontal Pod Autoscaler (HPA) do?",
    options: ["Scales the node pool", "Scales CPU/memory inside pods", "Scales pod replicas based on metrics", "Scales disk size"],
    correctAnswer: "C",
    explanation: `HPA adjusts the number of pod replicas based on observed CPU, memory, or custom metrics.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Horizontal Pod Autoscaling (HPA)"
  },
  {
    id: 7,
    question: "What Kubernetes component provides metrics for HPA to function?",
    options: ["Kube-proxy", "API Server", "Metrics Server", "Scheduler"],
    correctAnswer: "C",
    explanation: `The Metrics Server collects resource usage data required by the HPA to make scaling decisions.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Horizontal Pod Autoscaling (HPA)"
  },
  {
    id: 8,
    question: "Which resources does Vertical Pod Autoscaler (VPA) modify?",
    options: ["Node labels", "Replica count", "Container CPU/memory requests", "Pod count"],
    correctAnswer: "C",
    explanation: `VPA automatically adjusts the CPU and memory requests/limits for containers to optimize performance.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Vertical Pod Autoscaling (VPA)"
  },
  {
    id: 9,
    question: "Which mode allows VPA to recommend but not apply changes?",
    options: ["Off", "Auto", "Apply", "Active"],
    correctAnswer: "A",
    explanation: `The "Off" mode makes VPA non-intrusive—it only records recommendations without applying them.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Vertical Pod Autoscaling (VPA)"
  },
  {
    id: 10,
    question: "What happens when VPA applies changes to pod resources?",
    options: ["Updates containers in place", "Triggers a pod restart", "Ignores live pods", "Deletes entire deployment"],
    correctAnswer: "B",
    explanation: `VPA triggers a restart of the pod to apply new resource requests/limits.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Vertical Pod Autoscaling (VPA)"
  },
  {
    id: 11,
    question: "Why are namespaces used in Kubernetes?",
    options: ["To scale pods", "To define IPs", "To isolate resources and policies", "To run multiple OSes"],
    correctAnswer: "C",
    explanation: `Namespaces let teams logically separate workloads and enforce policies like limits, RBAC, and quotas.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Namespaces"
  },
  {
    id: 12,
    question: "How does GitOps improve disaster recovery?",
    options: ["Manual intervention", "Storing state in pods", "Replaying Git commits for cluster re-creation", "Container backup"],
    correctAnswer: "C",
    explanation: `Because Git is the single source of truth, clusters can be restored by reapplying manifests from Git.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 13,
    question: "Which Kubernetes object does HPA typically target?",
    options: ["Service", "Deployment", "ConfigMap", "Node"],
    correctAnswer: "B",
    explanation: `HPA is most commonly applied to Deployments, which manage scalable ReplicaSets.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Horizontal Pod Autoscaling (HPA)"
  },
  {
    id: 14,
    question: "What is required to use GitOps effectively?",
    options: ["Root access", "Git repository with Kubernetes manifests", "Auto-scaling pods", "Persistent Volumes"],
    correctAnswer: "B",
    explanation: `GitOps workflows are centered around having a Git repo that contains the cluster's declarative configuration.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 15,
    question: "Which GitOps tool is most focused on syncing Kubernetes state to match Git?",
    options: ["Argo CD", "Flux", "Jenkins", "Terraform"],
    correctAnswer: "A",
    explanation: `Argo CD syncs the live Kubernetes state with the declared state in Git.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 16,
    question: "Which tool helps visualize HPA behavior over time?",
    options: ["Prometheus", "kube-proxy", "Etcd", "kubectl logs"],
    correctAnswer: "A",
    explanation: `Prometheus can collect time-series metrics including those used by HPA, helping visualize autoscaling behavior.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Horizontal Pod Autoscaling (HPA)"
  },
  {
    id: 17,
    question: "Why might you prefer VPA over HPA?",
    options: ["When you need to scale replicas", "When pods have fixed usage but poor resource tuning", "To monitor metrics", "To limit CPU throttle"],
    correctAnswer: "B",
    explanation: `VPA is ideal when replica count is fixed but resource limits need tuning for optimal performance.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Vertical Pod Autoscaling (VPA)"
  },
  {
    id: 18,
    question: "What type of Kubernetes policy can be namespace-scoped?",
    options: ["PodDisruptionBudget", "NetworkPolicy", "NodeAffinity", "ClusterRole"],
    correctAnswer: "B",
    explanation: `NetworkPolicies are namespace-scoped and control communication between pods.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Namespaces"
  },
  {
    id: 19,
    question: "Which GitOps tool works natively with Helm and Kustomize?",
    options: ["Flux", "Jenkins", "Skaffold", "Tilt"],
    correctAnswer: "A",
    explanation: `Flux supports both Helm and Kustomize for defining infrastructure-as-code.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "GitOps"
  },
  {
    id: 20,
    question: "What happens if HPA and VPA are used together on the same pod?",
    options: ["They work perfectly together", "They ignore each other", "It leads to conflict and is not supported", "It speeds up scaling"],
    correctAnswer: "C",
    explanation: `HPA and VPA are not recommended to be used simultaneously on the same workload due to conflicting scaling strategies.`,
    answerDescription: "",
    domain: "Kubernetes",
    competency: "Horizontal & Vertical Autoscaling"
  }
];
